import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <header className="navbar">
                <Link className="navbar--link" to="/">Homepage</Link>
                <div>
                    <button className="navbar--btn">Language</button>
                    <Link className="navbar--link" to="/about">About</Link>
                </div>
            </header>
        )
    }
}
