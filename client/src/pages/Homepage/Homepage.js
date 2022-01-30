import React, { useState, useEffect }  from 'react';
import './Homepage.css';
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import axios from "axios";
import myApi from '../../api/api';

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

      useEffect(() => {
        const getData = async () => {
          try {
            const res = await myApi.get('getWeeklyEvents');
            console.log(res);
          } catch (error) {
            console.log(error);
          }
        }

        getData();
      
        // return () => {
        //   second;
        // };
      }, []);
      
    
    
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
