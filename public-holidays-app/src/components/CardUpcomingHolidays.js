const CardUpcomingHolidays = ({ data,countriesData}) => {
  return (
    <div className="card">
      <div className="card-header">Upcoming Public Holidays for next 7 days</div>
      <div className="card-body">
        <ul className="list-group">
          {data.map((holiday, index) => {
             const holidayCountry = countriesData.find(
              (country) => country.countryCode === holiday.countryCode
            );
            if (index % 2 === 0) {
              return (
                <li className="list-group-item" key={index}>
                  {holiday.date}: {holiday.name} in <b>{holidayCountry.name}</b> 
                  <h6>{holiday.localName}</h6>
                </li>
              );
            } else {
              return (
                <li className="list-group-item list-group-item-success" key={index}>
                  {holiday.date}: {holiday.name} in <b>{holidayCountry.name}</b> 
                  <h6>{holiday.localName}</h6>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
export default CardUpcomingHolidays;
