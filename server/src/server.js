require("./db/mongoose");
// require("./middleware/scraper/weeklyEvents");
const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();
const { getWeeklyEvents } = require('./routes/controllers/getWeeklyEvents.controllers');

const PORT = process.env.PORT || 5000;
const publicPath = path.join(__dirname, '../..', 'client/build');

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routers
app.get("/getWeeklyEvents", getWeeklyEvents);

app.all('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});