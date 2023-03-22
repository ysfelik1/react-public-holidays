import useFetch from '../hooks/useFetch';
import CardPublicHolidays from '../components/CardUpcomingHolidays';
import ErrorPage from '../components/ErrorPage';
import Loader from '../components/Loader';

const UpComingHolidays = () => {
  const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/NextPublicHolidaysWorldwide`,false);

  return isLoading ? <Loader /> : error ? <ErrorPage errorText={error.message} /> : (
      <div>
        <CardPublicHolidays data={data}/>
      </div>
  );
};
export default UpComingHolidays;