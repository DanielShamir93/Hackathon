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
  eventDate: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model("WeeklyEvents", weeklyEventsSchema);