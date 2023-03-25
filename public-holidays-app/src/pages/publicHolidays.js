import useFetch from '../hooks/useFetch';
import CardPublicHolidays from '../components/CardPublicHolidays';
import ErrorPage from '../components/ErrorPage';
import Loader from '../components/Loader';
import SelectCountries from '../components/SelectCountries';
import SelectYears from '../components/SelectYears';
import { useState } from 'react';

const PublicHolidays = () => {
  const currentYear = new Date().getFullYear();
  const [countryCode, setCountryCode] = useState('NL');
  const [year, setYear] = useState(currentYear);
  const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`, false);

  const handleCountryChange = (code) => {
    setCountryCode(code);
  };
  const handleYearChange = (code) => {
    setYear(code);
  };

  return isLoading ? <Loader /> : error ? <ErrorPage errorText={error.message} /> : (
    <div>
      <div className='selects'>
        <SelectCountries handleCountryChange={handleCountryChange} selectedValue={countryCode} />
        <SelectYears handleYearChange={handleYearChange} selectedValue={year} />
      </div>
      <CardPublicHolidays data={data} />
    </div>
  );
};

export default PublicHolidays;
