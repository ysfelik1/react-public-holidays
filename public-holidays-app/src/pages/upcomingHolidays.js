import useFetch from '../hooks/useFetch';
import CardPublicHolidays from '../components/CardUpcomingHolidays';
import ErrorPage from '../components/ErrorPage';
import Loader from '../components/Loader';

const UpComingHolidays = () => {
  const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/NextPublicHolidaysWorldwide`);

  return isLoading ? <Loader /> : error ? <ErrorPage errorText={error.message} /> : (
      <div>
        <h1 style={{color: "blue"}}>Upcoming Holidays for next 7 days</h1>
        <CardPublicHolidays data={data}/>
      </div>
  );
};
export default UpComingHolidays;