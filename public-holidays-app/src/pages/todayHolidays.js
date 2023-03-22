import useFetch from '../hooks/useFetch';
import CardTodayHolidays from '../components/CardTodayHolidays'
import ErrorPage from '../components/ErrorPage';
import Loader from '../components/Loader';
const TodayHolidays = () => {

  //does not return json, only response!
  const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/IsTodayPublicHoliday/TR?offset=1`,true);

  return isLoading ? <Loader /> : error ? <ErrorPage errorText={error.message} /> : (
      <div>
        <CardTodayHolidays data={data}/>
      </div>
  );
};
export default TodayHolidays;