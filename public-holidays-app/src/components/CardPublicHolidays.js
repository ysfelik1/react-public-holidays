
const CardPublicHolidays = ({data}) => {
  return (
    <div className="card">
      <div className="card-header">Public Holidays</div>
      <div className="card-body">
        <ul className="list-group">
          {data.map((holiday, index) => {
            if (index % 2 === 0) {
              return (
                <li className="list-group-item" key={index}>
                  {holiday.date}: {holiday.name}
                  <h6>{holiday.localName}</h6>
                </li>
              );
            } else {
              return (
                <li className="list-group-item list-group-item-success" key={index}>
                  {holiday.date}: {holiday.name}
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
  export default CardPublicHolidays;