import React, { createContext, useState,useContext} from "react";

const contextCountriesData= createContext(null);

export function useCountriesData(){
    return useContext(contextCountriesData)
}
export const CountriesDataProvider =({children})=>{
    const [countriesData, setCountriesData] = useState([]);

    const value={setCountriesData,countriesData}
    return <contextCountriesData.Provider value={value}> {children} </contextCountriesData.Provider>
}
