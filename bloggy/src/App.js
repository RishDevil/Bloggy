import React, { useEffect } from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Home from "./component/home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
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
