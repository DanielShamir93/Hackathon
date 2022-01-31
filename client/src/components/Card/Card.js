import React, { useState, useEffect } from "react";
import "./Card.css";
import Youtube from "../Youtube/Youtube";

const Card = ({ title, countries, summery }) => {
  const strMaxLength = 1000;
  const str = summery.substring(0, strMaxLength + 1);
  let isLonger = summery.length > strMaxLength ? true : false;

  const [txtToShow, setTxtToShow] = useState(`${str}...`);
  const [btnText, setBtnText] = useState("read more");

  useEffect(() => {
    let strToShow = summery.length > strMaxLength ? `${str}...` : summery;
    setTxtToShow(strToShow);
  }, [str]);

  const handleToggle = () => {
    if (btnText === "read more") {
      setTxtToShow(summery);
      setBtnText("show less");
    } else {
      setTxtToShow(`${str}...`);
      setBtnText("read more");
    }
  };

  const displayCountries = () => {
    const countriesStr = `This holiday is celebrated in: ${countries.join(
      ", "
    )}`;
    return countriesStr;
  };

  return (
    <div className="card">
      <div className="card--top">
        <div className="card--txt">
          <h1 className="card--title">{title}</h1>
          <h4 className="card--subtitle">{displayCountries()}</h4>
        </div>
        <Youtube keyword={title} />
      </div>
      <p className="card--summery">
        {txtToShow}
        {isLonger && (
          <button className="show-btn" onClick={handleToggle}>
            {btnText}
          </button>
        )}
      </p>
    </div>
  );
};

export default Card;
