import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="grid-container">
        <ul className="about--text box-1">
          <li>
            {
              "Every week comes with multiple events from mixed cultures & religions."
            }
          </li>
          <li>
            {
              "Our website explains you every single event in details & with relevant information including a video-describing the traditional way of celebrating the event."
            }
          </li>
        </ul>
        <div class="box box-2"></div>
        <div class="box box-3"></div>
        <div class="box box-15"></div>
        <div class="box box-4"></div>
        <div class="box box-5"></div>
        <div class="box box-6"></div>
        <div class="box box-7"></div>
        <ul className="about--text box-8">
          <li>
            {
              "An app that enables you to check on spot (according to the day’s date) what special event occurring in other people’s lives in your work space, study program or even simply in any social event that includes diversity of cultures & religions."
            }
          </li>
          <li>
            {
              "So people can get closer together & respect each other & bridge the social gap in the Israeli community."
            }
          </li>
        </ul>
        <div class="box box-9"></div>
        <div class="box box-10"></div>
        <div class="box box-11"></div>
        <div class="box box-12"></div>
        <ul className="about--text box-13">
          <li>
            {"We are 6 group members who met through a programming bootcamp."}
          </li>
          <li>
            {
              "Our values & identities stem from different roots of religions & cultures together with our other class mates."
            }
          </li>
          <li>
            {
              "So, this week’s mission was to find an idea that represents & connects us all on a deeper level."
            }
          </li>
          <li>
            {
              "Our team: Daniel Shamir, Fida Shnakher, Ori Altarace, Revital maor, Shaked Ben-Ratzon, Tahrer Abu-Diab."
            }
          </li>
        </ul>
        <div class="box box-14"></div>
      </div>
    </div>
  );
}

export default About;
