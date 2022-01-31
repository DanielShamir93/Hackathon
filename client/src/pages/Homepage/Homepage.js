import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import myApi from "../../api/api";
import Spinner from "../../components/Spinner/Spinner";
function Homepage() {
  const [holiday, setHoliday] = useState([]);
  const [dateArr, setDateArr] = useState([]);
  const [day, setDay] = useState([]);
  const [title, setTitle] = useState("");
  const [countries, setCountries] = useState([]);
  const [summery, setSummery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
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

    setDateArr(data);
    console.log(data, data.length);
    if (data.length) {
      setDay([data[0].holidays]);
      setTitle(data[0].holidays[0].title);
      setCountries(data[0].holidays[0].countries);
      setSummery(data[0].holidays[0].summery);
      console.log(day);
    }
  }, [holiday]);

  const handleClick = (event) => {
    console.log(event);
    setTitle(event.title);
    setCountries(event.countries);
    setSummery(event.summery);
  };

  const handleClickDate = (idx) => {
    setDay([dateArr[idx].holidays]);
    setTitle(dateArr[idx].holidays[0].title);
    setCountries(dateArr[idx].holidays[0].countries);
    setSummery(dateArr[idx].holidays[0].summery);
  };
  const displayHoliday = () => {
    if (day.length) {
      return day[0].map((item) => {
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
      {isLoading && <Spinner />}
      {!isLoading &&
        <>
          <div className="week-dates">{displayDates()}</div>
          <div className="info">
            <div className="holidays">{displayHoliday()}</div>
            <Card title={title} countries={countries} summery={summery} />
          </div>
        </>
      }
    </div>
  );
}
export default Homepage;