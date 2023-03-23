import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
// import { useState, useEffect } from 'react';

const SelectCountries = ({ handleCountryChange ,selectedValue}) => {
    const { data, isLoading, error } = useFetch(`https://date.nager.at/api/v3/AvailableCountries`, false);

    // const [selectedCountry, setSelectedCountry] = useState();

    const handleSelectChange = (event) => {
        // setSelectedCountry(event.target.value);
        handleCountryChange(event.target.value);
    };

    // useEffect(() => {
    //     console.log(selectedCountry);
    // }, [selectedCountry]);
    
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
