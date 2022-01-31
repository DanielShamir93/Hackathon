import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import axios from "axios";
import myApi from "../../api/api";

function Homepage() {
  const [holiday, setHoliday] = useState([]);
  const [dateArr, setDateArr] = useState([]);
  const [day, setDay] = useState([]);
  const [title, setTitle] = useState("");
  const [countries, setCountries] = useState([]);
  const [summery, setSummery] = useState("");
  const [isShow, setIsShow] = useState(false);
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
    const data = [];
    let dateObj = {};
    holiday.forEach((item) => {
      if (dateObj.day === item.fullDate.day && item.content.wiki.summery) {
        dateObj.holidays.push({
          summery: item.content.wiki.summery,
          fullDate: item.fullDate,
          title: item.title,
          countries: item.countries,
        });
      }
      else if (Object.keys(dateObj).length !== 0){
        data.push(dateObj);
        dateObj = {};
      }
      if (Object.keys(dateObj).length === 0  && item.content.wiki.summery) {
        dateObj.day = item.fullDate.day;
        dateObj.holidays = [
          {
            summery: item.content.wiki.summery,
            fullDate: item.fullDate,
            title: item.title,
            countries: item.countries,
          },
        ];
      }
    });

    // console.log(data[0].holidays);

    setDateArr(data);
    console.log(data, data.length);
    if (data.length) {
      setDay([data[0].holidays]);
      setTitle(data[0].holidays[0].title);
      setCountries(data[0].holidays[0].countries);
      setSummery(data[0].holidays[0].summery);
      console.log(day);
    }
    // console.log(data[0]);
    // const today = data[0].holidays;
    // console.log(today);
    // setDay();
    // console.log(day);
    // if (data[0].holiday) {
    //   console.log(data[0].holiday);

    // }
  
    // return () => {
    //   second;
    // };
  }, [holiday]);

  const handleClick = (event) => {
    console.log(event);
    setTitle(event.title);
    setCountries(event.countries);
    setSummery(event.summery);
  };

  const handleClickDate = (idx) => {
    console.log(dateArr[idx].holidays);
    setDay([dateArr[idx].holidays]);
    setTitle(dateArr[idx].holidays[0].title);
    setCountries(dateArr[idx].holidays[0].countries);
    setSummery(dateArr[idx].holidays[0].summery);

  };

  const displayHoliday = () => {
    // console.log(day);
    if (day.length) {
      console.log(day);
      return day[0].map((item) => {
        console.log(item);
        return (
          <Button
            handleClick={() => handleClick(item)}
            btnText={item.title}
            classBtn="holiday"
          />
        );
      });
    }
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
        <Card title={title} countries={countries} summery={summery} />
      </div>
    </div>
  );
}

export default Homepage;