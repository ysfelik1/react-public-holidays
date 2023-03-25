import ErrorPage from '../components/ErrorPage';
import Loader from '../components/Loader';
import useFetch from "../hooks/useFetch";
const CardUpcomingHolidays = ({ upComingData }) => {

  const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/AvailableCountries`, false);
  return isLoading ? <Loader /> : error ? <ErrorPage errorText={error.message} /> : (
    <div className="card">
      <div className="card-header">Upcoming Public Holidays for next 7 days</div>
      <div className="card-body">
        <ul className="list-group">
          {upComingData.map((holiday, index) => {
            const holidayCountry = data.find(
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
