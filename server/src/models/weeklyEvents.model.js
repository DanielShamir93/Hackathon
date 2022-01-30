const mongoose = require('mongoose');

const weeklyEventsSchema = new mongoose.Schema({
  event: {
    date: {
      type: String,
      required: true,
      trim: true
    },
    day: {
      type: String,
      required: true,
      trim: true
    },
  },
  eventName: {
    type: String,
    required: true,
    trim: true
  },
  countries: {
    type: [],
    default: ["International"]
  }
});


module.exports = mongoose.model("WeeklyEvents", weeklyEventsSchema);