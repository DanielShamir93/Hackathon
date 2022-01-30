const puppeteer = require("puppeteer");
const cron = require("node-cron");
const weeklyEventsModel = require("../../models/weeklyEvents.model");

const grabWeeklyEvents = async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.timeanddate.com/holidays/");

  const rawData = await page.evaluate(() => {
    const ROW_WITH_DATE_LENGTH = 4;
    const FIRST_CONTENT_CELL = 1;
    let data = [];
    let table = document.querySelector(
      "body > div.main-content-div > div.main-content-div > main > div > section > article.table-data > section > table > tbody"
    );

    let eventDate = "";
    for (let i = 0; i < table.rows.length; i++) {
      // Go through each row cells
      const rowObject = table.rows.item(i).cells;
      const values = [];
      for (let j = 1; j < rowObject.length; j++) {
        // For each cell extract its content
        if (
          rowObject.length === ROW_WITH_DATE_LENGTH &&
          j === FIRST_CONTENT_CELL
        ) {
          // A row with date and first cell (date)
          eventDate = {
            date: rowObject.item(0).innerText,
            day: rowObject.item(1).innerText,
          };
          j++;
        }
        let content = rowObject.item(j).innerText;

        values.push(content);
      }
      // Add event by date and content
      data.push({ eventDate, values });
    }

    return data;
  });

  await organizeData(rawData);

  await browser.close();

  // res.send(rawData);
};

const organizeData = async (rawData) => {
  try {
    const dataArray = await weeklyEventsModel.find();

    if (dataArray.length > 0) {
    } else {
      const weeklyEventsArray = rawData.map((dayEvent) => {
        return {
          fullDate: {
            date: dayEvent.eventDate.date,
            day: dayEvent.eventDate.day,
          },
          title: dayEvent.values[0],
          countries: dayEvent.values[1]
            .split(",")
            .map((country) => country.trim()),
        };
      });

      // weeklyEventsModel.insertMany(weeklyEventsArray);
      grabContent(weeklyEventsArray);
    }
  } catch (err) {
    console.log(err.message);
  }
};

const grabContent = async (weeklyEventsArray) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.wikipedia.org/");


  for (let dayEvent of weeklyEventsArray) {
    const { title } = dayEvent;

    await page.type("#search-input", title);
    await page.click(".pure-button.pure-button-primary-progressive");

    const rawData = await page.evaluate(() => {
      const summery = document.querySelector("#mw-content-text > div.mw-parser-output > p:nth-child(4)");
      return summery.innerText;
    }, []);
    
    dayEvent.content = {};
    dayEvent.content.wiki = {};
    dayEvent.content.wiki.summery = rawData;
  }

  console.log(weeklyEventsArray[0].content.wiki);

  await browser.close();
}

const array = [{
  fullDate: {
    date: "Jan 30",
    day: "Sunday"
  },
  title: "The Three Holy Hierarchs",
  countries: ["Greece"]
}]

grabContent(array);

// grabWeeklyEvents();
// cron.schedule('*/60 * * * * *', grabWeeklyEvents);
