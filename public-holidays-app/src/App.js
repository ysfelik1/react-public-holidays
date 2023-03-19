import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import React from "react";
import UpComingHolidays from "./components/upcomingHolidays";
import TodayHolidays from "./components/todayHolidays";
import PublicHolidays from "./components/publicHolidays";
import { Container } from 'react-bootstrap';

// const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');
function App() {

  return (

    <Router>
      <Header className={"header"} />
      <Container className="mt-4">
        <Routes>
          <Route exact path="/Public-Holidays" element={<PublicHolidays />} />
          <Route exact path="/UpComing-Public-Holidays" element={<UpComingHolidays />} />
          <Route exact path="/Is-Today-Holiday" element={<TodayHolidays />} />
        </Routes>
      </Container>
    </Router>

  );
}

export default App;
