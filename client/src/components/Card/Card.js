import React from "react";
import "./Card.css";
import Youtube from "../Youtube/Youtube";

const Card = ({ text }) => {
  return (<div className="card">
    {text}
    <Youtube keyword = "harry potter" />
    </div>);
};

export default Card;
