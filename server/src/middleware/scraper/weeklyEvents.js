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
  // console.log(rawData)
  await insertFirstData(rawData);

  await browser.close();

  // res.send(rawData);
};

const insertFirstData = async (rawData) => {
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

      weeklyEventsModel.insertMany(weeklyEventsArray);

      await insertSecondData(weeklyEventsArray)
    }
  } catch (err) {
    console.log(err.message);
  }
};

const insertSecondData = async () => {

}

grabWeeklyEvents();
// cron.schedule('*/60 * * * * *', grabWeeklyEvents);