import React from "react" ;
import CountrySearch from "./CountrySearch";
import CountrySelect from "./CountrySelect";


const CountrySearchFilter = ({countryData, setDisplayCountry}) =>{
return (
    <div className="inputSearch">
        <CountrySearch countryData={countryData} setDisplayCountry={setDisplayCountry} />
        <CountrySelect countryData={countryData} setDisplayCountry={setDisplayCountry}  />
       
    </div>
)

}


export default CountrySearchFilter ;