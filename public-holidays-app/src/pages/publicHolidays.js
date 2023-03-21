import useFetch from '../hooks/useFetch';
import CardPublicHolidays from '../components/CardPublicHolidays';
import ErrorPage from '../components/ErrorPage';
import Loader from '../components/Loader';

const PublicHolidays = () => {
  const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/PublicHolidays/2023/TR`);

  return isLoading ? <Loader /> : error ? <ErrorPage errorText={error.message} /> : (
    <div>
      <h1 style={{ color: "blue" }}>Public Holidays</h1>
      <CardPublicHolidays data={data} />
    </div>
  );
};

export default PublicHolidays;
