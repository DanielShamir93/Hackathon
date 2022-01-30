import React from 'react';
import "./Card.css";

const Card = () => {
      return (
      <div className="card">
        Card
      </div>
    );
}

export default Card

/**
 * const weeklyEventsSchema = new mongoose.Schema({
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
        required: true,
        trim: true
      },
      url: {
        type: String,
        required: true,
        trim: true
      }
    },
    youtubeUrl: {
      type: String,
      // required: true,
      trim: true
    }
  }
});

 */
