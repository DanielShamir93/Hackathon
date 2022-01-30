// require("./db/mongoose");
// const puppeteerRouter = require("./routes/puppeteer/puppeteer.router");
const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;
const publicPath = path.join(__dirname, '../..', 'client/build');

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routers
// app.use("/hackathon", puppeteerRouter);

require("./middleware/scraper/puppeteer");

app.all('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});