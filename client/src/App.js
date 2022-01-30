import React from "react";
// import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
// import axios from "axios";
import "./App.css";
import About from "./pages/About/About";
import Homepage from "./pages/Homepage/Homepage";
// import Button from "./components/Button/Button";
// import Card from "./components/Card/Card";


function App() {
  // const test = [
  //   {
  //     event: "New Year's Day",
  //     date: "",
  //   },
  //   {
  //     event: 	"Kwaanza (ends)",
  //     date: "",
  //   },
  //   {
  //     event: "Epiphany",
  //     date: "",
  //   },
  //   {
  //     event: "Orthodox Christmas Day",
  //     date: "",
  //   },
  //   {
  //     event: "Orthodox New Year ",
  //     date: "",
  //   },
  // ];


  // const [holiday, setHoliday] = useState(test);

  // const handleClick = (event) => {
  //   console.log(`we clicked on ${event}`);
  // }

  // const handleClickDate = (date) => {
  //   console.log(`we clicked on ${date}`);
  // }



  // const displayHoliday = () => {
  //   //! need to see what are the keys in the obj we get from the back.
  //   return holiday.map(item => {
  //     return (
  //       <Button handleClick={() => handleClick(item.event)} btnText={item.event} classBtn="btn" />
  //     );
  //   });
  // }

  // const displayDates = () => {
  //   const weekDates = [];

  //   for (let i = 0; i < 7; i++) {
  //     const current = new Date();
  //     current.setDate(current.getDate() + i);
  //     const date = current.toDateString();
  //     weekDates.push(date);
  //   }

  //   return weekDates.map((day,idx) => {
  //     return (
  //       <Button handleClick={() => handleClickDate(day)} btnText={day} classBtn="date" />
  //     );
  //   });

  // }


  // return (
  //   <div className="container">
  //     <div className="week-dates">{displayDates()}</div>
  //     <div className="info">
  //       <Card />
  //       <div className="holidays">{displayHoliday()}</div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="container">
      <About/>
    </div>
  );
}

export default App;
