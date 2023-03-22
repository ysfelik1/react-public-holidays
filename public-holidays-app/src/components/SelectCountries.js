/* eslint-disable no-undef */
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

const SelectCountries = () => {
    const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/AvailableCountries`, false);
    const DEFAULT_COUNTRY_CODE='NL';
    return isLoading ? <Loader /> : error ? <ErrorPage errorText={error.message} /> : (
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" defaultValue={DEFAULT_COUNTRY_CODE}>
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