import React, { useState }  from 'react';
import './Homepage.css';
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

function Homepage() {
    const test = [
        {
          event: "New Year's Day",
          date: "",
        },
        {
          event: 	"Kwaanza (ends)",
          date: "",
        },
        {
          event: "Epiphany",
          date: "",
        },
        {
          event: "Orthodox Christmas Day",
          date: "",
        },
        {
          event: "Orthodox New Year ",
          date: "",
        },
      ];


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
    
    
      const [holiday, setHoliday] = useState(test);
      const [text, setText] = useState('Card');
    
      const handleClick = (event) => {
        setText(`we clicked on ${event}`);
        console.log(`we clicked on ${event}`);
      }
    
      const handleClickDate = (date) => {
        console.log(`we clicked on ${date}`);
      }
    
    
    
      const displayHoliday = () => {
        //! need to see what are the keys in the obj we get from the back.
        return holiday.map(item => {
          return (
            <Button handleClick={() => handleClick(item.event)} btnText={item.event} classBtn="holiday" />
          );
        });
      }
    
      const displayDates = () => {
        const weekDates = [];
    
        for (let i = 0; i < 7; i++) {
          const current = new Date();
          current.setDate(current.getDate() + i);
          const date = current.toDateString();
          weekDates.push(date);
        }
    
        return weekDates.map((day,idx) => {
          return (
            <Button handleClick={() => handleClickDate(day)} btnText={day} classBtn="date" />
          );
        });
    
      }
    
    
      return (
        <div className="homepage">
          <div className="week-dates">{displayDates()}</div>
          <div className="info">
            <div className="holidays">{displayHoliday()}</div>
            <Card text={text}/>
          </div>
        </div>
      );
    
}

export default Homepage;
