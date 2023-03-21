
const CardUpcomingHolidays = ({data}) => {
    return (
        <div className="card">
        <div className="card-header">Upcoming Public Holidays</div>
        <div className="card-body">
          <ul>
            {data.map((holiday,index) => (
              <li key={index}>
                {holiday.date}: {holiday.name} in {holiday.countryCode}
              </li>
            ))}
          </ul>
        </div>
        </div>
    );
  };
  export default CardUpcomingHolidays;