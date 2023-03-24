import useFetch from '../hooks/useFetch';
import CardUpcomingHolidays from '../components/CardUpcomingHolidays';
import ErrorPage from '../components/ErrorPage';
import Loader from '../components/Loader';
import { useCountriesData } from '../hooks/useContext';

const UpComingHolidays = () => {

  const { countriesData} = useCountriesData();

  const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/NextPublicHolidaysWorldwide`,false);

  return isLoading ? <Loader /> : error ? <ErrorPage errorText={error.message} /> : (
      <div>
        <CardUpcomingHolidays data={data} countriesData={countriesData} />
      </div>
  );
};
export default UpComingHolidays;