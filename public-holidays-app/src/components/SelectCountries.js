import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

const SelectCountries = () => {
    const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/AvailableCountries`, false);

    return isLoading ? <Loader /> : error ? <ErrorPage errorText={error.message} /> : (
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option key={-1}>Choose a country</option>
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