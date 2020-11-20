import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home>
          <Router></Router>
        </Home>
      </BrowserRouter>
    </div>
  );
}

export default App;
