import React from "react";
// import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import axios from "axios";
import "./App.css";
import About from "./pages/About/About";
import Homepage from "./pages/Homepage/Homepage";
import NoMatch from "./pages/NoMatch/NoMatch";
import Header from './components/Header/Header'

function App() {

  return (
    <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/about" exact component={About} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;