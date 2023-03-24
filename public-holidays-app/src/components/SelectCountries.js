import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import { useCountriesData } from "../hooks/useContext"
const SelectCountries = ({ handleCountryChange ,selectedValue}) => {
    const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/AvailableCountries`, false);
    const {setCountriesData}=useCountriesData();
    const handleSelectChange = (event) => {
        handleCountryChange(event.target.value);
    };
   
    const countriesData = data;
    setCountriesData(countriesData);

    return isLoading ? <Loader /> : error ? <ErrorPage errorText={error.message} /> : (
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" defaultValue={selectedValue} onChange={handleSelectChange}>
            {
                data.map((country,index) => {
                    return (
                        <option key={index} value={country.countryCode}>{country.name}</option>
                    )
                })
            }
        </select>
    )
}

export default SelectCountries;
