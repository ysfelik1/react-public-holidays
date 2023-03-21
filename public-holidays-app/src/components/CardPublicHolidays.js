
const CardPublicHolidays = ({data}) => {
    return (
        <div className="card">
        <div className="card-header">Public Holidays</div>
        <div className="card-body">
          <ul>
            {data.map((holiday,index) => (
              <li key={index}>
                {holiday.date}: {holiday.name}
              </li>
            ))}
          </ul>
        </div>
        </div>
    );
  };
  export default CardPublicHolidays;