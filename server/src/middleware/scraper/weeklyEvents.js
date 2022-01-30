const puppeteer = require("puppeteer");
const cron = require("node-cron");
const weeklyEventsModel = require("../../models/weeklyEvents.model");
const getSelectorAll = async (page, selector) => await page.$$(selector);

const grabWeeklyEvents = async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.timeanddate.com/holidays/");

  const rawData = await page.evaluate(async () => {
    const ROW_WITH_DATE_LENGTH = 4;
    const FIRST_CONTENT_CELL = 1;
    const data = [];
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
    grabContent(weeklyEventsArray);
  } catch (err) {
    console.log(err.message);
  }
};

const getInnerText = async (element) =>
  await (await element.getProperty("innerText")).jsonValue();

const grabContent = async (weeklyEventsArray) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    for (let dayEvent of weeklyEventsArray) {
      await page.goto("https://www.wikipedia.org/");
      const { title } = dayEvent;
      await page.type("#search-input", title);
      await page.waitForTimeout(3000);
      await page.click(".pure-button.pure-button-primary-progressive");
      await page.waitForTimeout(3000);
      const url = await page.url();
      if (url.includes("Search")) {
        continue;
      }
      const elementPath = "#mw-content-text > div.mw-parser-output p";
      const summeriesArray = await getSelectorAll(page, elementPath);

      if (summeriesArray.length === 0) return "Summery Failed";

      const array = [];
      for (let i = 0; i < summeriesArray.length; i++) {
        array.push(await getInnerText(summeriesArray[i]));
      }

      let parsedSummery = array.join(" ").replace(/(\\n)|\[\d*]|(\/)/g, "");

      dayEvent.content.wiki.summery = parsedSummery || "";
      dayEvent.content.wiki.url = url || "";
    }
    console.log(weeklyEventsArray);
    weeklyEventsModel.insertMany(weeklyEventsArray);

    await browser.close();
  } catch (err) {
    console.log(err);
  }
};

grabWeeklyEvents();

// cron.schedule('*/60 * * * * *', grabWeeklyEvents);
