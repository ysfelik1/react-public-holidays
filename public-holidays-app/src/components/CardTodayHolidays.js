import React from "react";

const CardTodayHolidays = ({ data }) => (
  <div className="card">
    <div className="card-header">Public Holidays Today</div>
    <div className="card-body mx-auto">
      {data === false ? (
        <React.Fragment>
          <p className="text-muted">There is no holiday today</p>
          <img src={process.env.PUBLIC_URL + '/spongebob-bored.gif'} alt="no-holiday" />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p>Relax, today is holiday</p>
          <img src={process.env.PUBLIC_URL + '/sponge-bob-smooth.gif'} alt="no-holiday" />
        </React.Fragment>
      )}
    </div>
  </div>
);

export default CardTodayHolidays;
