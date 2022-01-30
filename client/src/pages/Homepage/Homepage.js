import React, { useState, useEffect }  from 'react';
import './Homepage.css';
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

function Homepage() {
    const test = [
      {
        fullDate: { date: 'Jan 30', day: 'Sunday' },
        title: 'The Three Holy Hierarchs',
        countries: [ 'Greece' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Jan 31', day: 'Monday' },
        title: 'Spring Festival Eve',
        countries: [ 'China' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Jan 31', day: 'Monday' },
        title: 'Seollal Holiday',
        countries: [ 'South Korea' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Jan 31', day: 'Monday' },
        title: 'Lunar New Year Eve',
        countries: [ 'Macau' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Jan 31', day: 'Monday' },
        title: 'Independence Day',
        countries: [ 'Nauru' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Jan 31', day: 'Monday' },
        title: 'Northland Anniversary Day',
        countries: [ 'New Zealand' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Jan 31', day: 'Monday' },
        title: 'Auckland Anniversary Day',
        countries: [ 'New Zealand' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Jan 31', day: 'Monday' },
        title: 'Nelson Anniversary Day',
        countries: [ 'New Zealand' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Jan 31', day: 'Monday' },
        title: "Lunar New Year's Eve",
        countries: [ 'Taiwan' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Jan 31', day: 'Monday' },
        title: "Vietnamese New Year's Eve",
        countries: [ 'Vietnam' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 1', day: 'Tuesday' },
        title: 'Lunar New Year',
        countries: [
          'Australia',   'Brunei',
          'China',       'Hong Kong',
          'Indonesia',   'North Korea',
          'South Korea', 'Mongolia',
          'Malaysia',    'Philippines',
          'Singapore',   'Suriname',
          'Thailand',    'Taiwan'
        ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 1', day: 'Tuesday' },
        title: 'Day of Remembrance and Respect to Victims of the Communist Regime',
        countries: [ 'Bulgaria' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 1', day: 'Tuesday' },
        title: 'Lunar New Year (First Day)',
        countries: [ 'Macau' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 1', day: 'Tuesday' },
        title: 'Abolition of Slavery',
        countries: [ 'Mauritius' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 1', day: 'Tuesday' },
        title: 'Chinese Spring Festival',
        countries: [ 'Mauritius' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 1', day: 'Tuesday' },
        title: 'Federal Territory Day',
        countries: [ 'Malaysia' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 1', day: 'Tuesday' },
        title: 'Independence Day Holiday',
        countries: [ 'Nauru' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 1', day: 'Tuesday' },
        title: "National Heroes' Day",
        countries: [ 'Rwanda' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 1', day: 'Tuesday' },
        title: 'Vietnamese New Year',
        countries: [ 'Vietnam' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Lunar New Year Holiday (Day 2)',
        countries: [ 'Australia' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Feast of Candelaria',
        countries: [ 'Bolivia' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Traditional Day of Offerings',
        countries: [ 'Bhutan' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Groundhog Day',
        countries: [ 'Canada' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Spring Festival Golden Week holiday',
        countries: [ 'China' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Anniversary of Tartu Peace Treaty',
        countries: [ 'Estonia' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Second day of Lunar New Year',
        countries: [ 'Hong Kong', 'Malaysia', 'Singapore', 'Thailand' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Seollal Holiday',
        countries: [ 'South Korea' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Candlemas',
        countries: [ 'Liechtenstein' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Second Day of Lunar New Year',
        countries: [ 'Mongolia' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Lunar New Year (Second Day)',
        countries: [ 'Macau' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Lunar New Year Holiday',
        countries: [ 'Malaysia', 'Taiwan' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Sonam Losar (Tamang New Year)',
        countries: [ 'Nepal' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 2', day: 'Wednesday' },
        title: 'Tet holiday',
        countries: [ 'Vietnam' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 3', day: 'Thursday' },
        title: 'Spring Festival Golden Week holiday',
        countries: [ 'China' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 3', day: 'Thursday' },
        title: 'Third day of Lunar New Year',
        countries: [ 'Hong Kong', 'Thailand' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 3', day: 'Thursday' },
        title: 'Our Lady of Suyapa',
        countries: [ 'Honduras' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 3', day: 'Thursday' },
        title: 'Third Day of Lunar New Year',
        countries: [ 'Mongolia' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 3', day: 'Thursday' },
        title: 'Lunar New Year (Third Day)',
        countries: [ 'Macau' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 3', day: 'Thursday' },
        title: 'Mozambican Heroes Day',
        countries: [ 'Mozambique' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 3', day: 'Thursday' },
        title: 'Commemoration of the Batepá Massacre',
        countries: [ 'Sao Tome and Principe' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 3', day: 'Thursday' },
        title: 'Lunar New Year Holiday',
        countries: [ 'Taiwan' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 3', day: 'Thursday' },
        title: 'Tet holiday',
        countries: [ 'Vietnam' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 4', day: 'Friday' },
        title: 'Liberation Movement Day',
        countries: [ 'Angola' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 4', day: 'Friday' },
        title: 'Spring Festival Golden Week holiday',
        countries: [ 'China' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 4', day: 'Friday' },
        title: 'National Day',
        countries: [ 'Sri Lanka' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 4', day: 'Friday' },
        title: 'Lunar New Year Holiday',
        countries: [ 'Taiwan' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 4', day: 'Friday' },
        title: "Farmer's Day",
        countries: [ 'Taiwan' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 4', day: 'Friday' },
        title: 'Rosa Parks Day',
        countries: [ 'United States' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 4', day: 'Friday' },
        title: 'Tet holiday',
        countries: [ 'Vietnam' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 5', day: 'Saturday' },
        title: 'Saraswati Puja',
        countries: [ 'Bangladesh' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 5', day: 'Saturday' },
        title: 'Unity Day',
        countries: [ 'Burundi' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 5', day: 'Saturday' },
        title: 'Spring Festival Golden Week holiday',
        countries: [ 'China' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 5', day: 'Saturday' },
        title: 'Vasant Panchami',
        countries: [ 'India' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 5', day: 'Saturday' },
        title: 'Constitution Day',
        countries: [ 'Mexico' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 5', day: 'Saturday' },
        title: 'Kashmir Day',
        countries: [ 'Pakistan' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 5', day: 'Saturday' },
        title: 'Basant Panchami',
        countries: [ 'Pakistan' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 5', day: 'Saturday' },
        title: 'Feast of St Agatha',
        countries: [ 'San Marino' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 5', day: 'Saturday' },
        title: 'Lunar New Year Holiday',
        countries: [ 'Taiwan' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 5', day: 'Saturday' },
        title: 'Tet holiday',
        countries: [ 'Vietnam' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 6', day: 'Sunday' },
        title: 'Spring Festival Golden Week holiday',
        countries: [ 'China' ],
        content: { wiki: [Object] }
      },
      {
        fullDate: { date: 'Feb 6', day: 'Sunday' },
        title: 'Waitangi Day',
        countries: [ 'New Zealand' ],
        content: { wiki: [Object] }
      }
    ];   
    
      const [holiday, setHoliday] = useState(test);
      const [dateArr, setDateArr] = useState([]);
      const [text, setText] = useState('Card');

      useEffect(() => {
        const dataArr = [];
        const dateObj = {};
        holiday.forEach(item => {
          
        });
      
        // return () => {
        //   second;
        // };
      }, [holiday]);
      
    
      const handleClick = (event) => {
        setText(`we clicked on ${event}`);
        console.log(`we clicked on ${event}`);
      }
    
      const handleClickDate = (date) => {
        console.log(`we clicked on ${date}`);
      }
    
    
    
      const displayHoliday = () => {
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
            <Button handleClick={() => handleClickDate(idx)} btnText={day} classBtn="date" />
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