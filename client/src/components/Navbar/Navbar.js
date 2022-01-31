import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <div className="navbar--left">
          <div className="navbar-logo"></div>
          <Link className="navbar--link" to="/">
            Homepage
          </Link>
        </div>
        <Link className="navbar--link" to="/about">
          About
        </Link>
      </header>
    );
  }
}
