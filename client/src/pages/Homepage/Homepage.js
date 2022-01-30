import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import axios from "axios";
import myApi from "../../api/api";

function Homepage() {
  const [holiday, setHoliday] = useState([]);
  const [dateArr, setDateArr] = useState([]);
  const [text, setText] = useState("Card");

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await myApi.get("getWeeklyEvents");
        console.log(data);
        setHoliday(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();

    // return () => {
    //   second;
    // };
  }, []);

  useEffect(() => {
    const dataArr = [];
    let dateObj = {};
    holiday.forEach((item) => {
      if (dateObj[item.fullDate.day]) {
        dateObj.item.fullDate.day.push({
          summery: item.content.wiki.summery,
          fullDate: item.fullDate,
          title: item.title,
          countries: item.countries,
        });
      }
      else if (Object.keys(dateObj).length !== 0){
        dataArr.push(dateObj);
        dateObj = {};
      }
      if (Object.keys(dateObj).length === 0) {
        dateObj.item.fullDate.day = [
          {
            summery: item.content.wiki.summery,
            fullDate: item.fullDate,
            title: item.title,
            countries: item.countries,
          },
        ];
      }
    });

    setDateArr(dataArr);

    // return () => {
    //   second;
    // };
  }, [holiday]);

  const handleClick = (event) => {
    setText(`we clicked on ${event}`);
    console.log(`we clicked on ${event}`);
  };

  const handleClickDate = (idx) => {
    // dataArr[idx]
    console.log(`we clicked on ${dateArr[idx]}`);
  };

  const displayHoliday = () => {
    return holiday.map((item) => {
      return (
        <Button
          handleClick={() => handleClick(item.event)}
          btnText={item.event}
          classBtn="holiday"
        />
      );
    });
  };

  const displayDates = () => {
    const weekDates = [];

    for (let i = 0; i < 7; i++) {
      const current = new Date();
      current.setDate(current.getDate() + i);
      const date = current.toDateString();
      weekDates.push(date);
    }

    return weekDates.map((day, idx) => {
      return (
        <Button
          handleClick={() => handleClickDate(idx)}
          btnText={day}
          classBtn="date"
        />
      );
    });
  };

  return (
    <div className="homepage">
      <div className="week-dates">{displayDates()}</div>
      <div className="info">
        <div className="holidays">{displayHoliday()}</div>
        <Card text={text} />
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
