import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import firstpicture from "./components/Images/firstpicture.png";
import './App.css';
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";
import Game1 from './components/Game1'; // Import Game1
import Game2 from './components/Game2'; // Import Game2

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <img className="Background" src={firstpicture} alt={firstpicture} />
              <div className="page-container"> {/* This container applies to Page1-Page8 */}
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
                <Page5 />
                <Page6 />
                <Page7 />
                <Page8 />
              </div>
            </>
          } />
          {/* Game1 and Game2 routes without the page-container styling */}
          <Route path="/game1" element={<Game1 />} />
          <Route path="/game2" element={<Game2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
