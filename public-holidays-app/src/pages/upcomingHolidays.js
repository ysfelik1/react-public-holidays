import useFetch from '../hooks/useFetch';
import CardUpcomingHolidays from '../components/CardUpcomingHolidays';
import ErrorPage from '../components/ErrorPage';
import Loader from '../components/Loader';

const UpComingHolidays = () => {

  const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/NextPublicHolidaysWorldwide`, false);
  const upComingData = data;
  return isLoading ? <Loader /> : error ? <ErrorPage errorText={error.message} /> : (
    <div>
      <CardUpcomingHolidays upComingData={upComingData} />
    </div>
  );
};
export default UpComingHolidays;