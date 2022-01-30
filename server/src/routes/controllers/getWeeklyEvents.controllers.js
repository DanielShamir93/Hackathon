const WeeklyEvents = require("../../models/weeklyEvents.model");

const getWeeklyEvents = async (req, res) => {
  try {
    const allEvents = await WeeklyEvents.find();
    if (allEvents.length === 0) {
      throw new Error("DB is empty");
    }
    res.status(200).send(allEvents);
  } catch (err) {
    res.send(500).send(err.message);
  }
};

module.exports = { getWeeklyEvents };
