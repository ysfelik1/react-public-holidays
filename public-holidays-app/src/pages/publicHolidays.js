import useFetch from '../hooks/useFetch';
import CardPublicHolidays from '../components/CardPublicHolidays';
import ErrorPage from '../components/ErrorPage';
import Loader from '../components/Loader';
import SelectCountries from '../components/SelectCountries';

const PublicHolidays = () => {
  const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/PublicHolidays/2023/TR`,false);

  return isLoading ? <Loader /> : error ? <ErrorPage errorText={error.message} /> : (
    <div>
      <SelectCountries/>
      <CardPublicHolidays data={data} />
    </div>
  );
};

export default PublicHolidays;
