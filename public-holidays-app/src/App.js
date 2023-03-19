import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/header";
import React from "react";
import UpComingHolidays from "./pages/upcomingHolidays";
import TodayHolidays from "./pages/todayHolidays";
import PublicHolidays from "./pages/publicHolidays";
import { Container } from 'react-bootstrap';

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
