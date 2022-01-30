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
    await weeklyEventsModel.deleteMany({});
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
        content: { wiki: { summery: "", url: "" } },
      };
    });
    weeklyEventsModel.insertMany(weeklyEventsArray);
    grabContent(weeklyEventsArray);
  } catch (err) {
    console.log(err.message);
  }
};

const getSelector = async (page, selector) => await page.$(selector);
const getInnerText = async (element) =>
  await (await element.getProperty("innerText")).jsonValue();

const grabContent = async (weeklyEventsArray) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  for (let dayEvent of weeklyEventsArray) {
    await page.goto("https://www.wikipedia.org/");
    const { title } = dayEvent;
    await page.type("#search-input", title);
    await page.waitForTimeout(3000);
    await page.click(".pure-button.pure-button-primary-progressive");
    await page.waitForTimeout(3000);
    const elementPath =
    "#mw-content-text > div.mw-parser-output > p:nth-child(4)";
    const summery = await getSelector(page, elementPath);
    if (!summery) return "Summery Failed";
    const rawData = await getInnerText(summery);
    const url = await page.url();

    console.log(url);
    
    dayEvent.content.wiki.summery = rawData;
    dayEvent.content.wiki.url = url;
    console.log(dayEvent.content.wiki)

  }
  console.log(weeklyEventsArray);
  await browser.close();
};

const array = [
  {
    fullDate: {
      date: "Jan 30",
      day: "Sunday",
    },
    title: "The Three Holy Hierarchs",
    countries: ["Greece"],
    content: { wiki: { summery: "", url: "" } },
  },
  {
    fullDate: {
      date: "Jan 10",
      day: "Monday",
    },
    title: "The Three Holy Hierarchs",
    countries: ["US"],
    content: { wiki: { summery: "", url: "" } },
  },
];

grabContent(array);

// grabWeeklyEvents();
// cron.schedule('*/60 * * * * *', grabWeeklyEvents);
