import React, { useEffect, useState } from "react";


const CountrySearch = ({countryData, setDisplayCountry}) => {
  const  [ value, setValue] =useState("");

  const handleChange = (event) => {
      setValue(event.target.value)

  }
   useEffect(() => {
   const searchResult = countryData.filter((country)=> { 
    return country.name.toLowerCase().includes(value.toLowerCase()) || country.capital.toLowerCase().includes(value.toLowerCase())
    })
    setDisplayCountry(searchResult)
   }, [setDisplayCountry, countryData, value]) 
    return(
        <input value={value} type="text" placeholder="Search ..." className="search" onChange={handleChange}/>

    )
}


export default CountrySearch ;