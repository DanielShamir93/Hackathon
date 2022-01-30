const mongoose = require('mongoose');

const weeklyEventsSchema = new mongoose.Schema({
  fullDate: {
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
  title: {
    type: String,
    required: true,
    trim: true
  },
  countries: {
    type: [],
    default: ["International"],
    trim: true
  },
  content: {
    wiki: {
      summery: {
        type: String,
        trim: true
      },
      url: {
        type: String,
        trim: true
      }
    },
    youtubeUrl: {
      type: String,
      trim: true
    }
  }
});


module.exports = mongoose.model("WeeklyEvents", weeklyEventsSchema);