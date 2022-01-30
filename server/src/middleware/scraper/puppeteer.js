const puppeteer = require("puppeteer");
const cron = require('node-cron');

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
        if (rowObject.length === ROW_WITH_DATE_LENGTH && j === FIRST_CONTENT_CELL) {
          // A row with date and first cell (date)
          eventDate = rowObject.item(0).innerText;
        }
        let content = rowObject.item(j).innerText;

        values.push(content);
      }
      // Add event by date and content
      data.push({ eventDate, values });
    }

    return data;
  });
  console.log(rawData);

  await browser.close();

  // res.send(rawData);
};
// cron.schedule('*/5 * * * * *', grabWeeklyEvents);

