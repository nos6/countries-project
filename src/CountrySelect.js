import React,{ useEffect, useState} from "react" ;

const CountrySelect = ({countryData, setDisplayCountry}) => {

  const [ selected, setSelected ]=useState("")

const handleChange = (event)=> {
  setSelected(event.target.value)
  
}
useEffect(()=>{
const selectRegion = countryData.filter((country)=>{
  return country.region.toLowerCase() === selected.toLowerCase()
})
if(selected === "" || selected === "default"){
  setDisplayCountry(countryData);
} else {

  setDisplayCountry(selectRegion);
}
},[setDisplayCountry, countryData, selected])
    return (
     <>
        <label for="regions" >Choose a Region:</label>
        <select name="regions" id="regions" onChange={handleChange}>
          <option value="default">select region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia </option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
          <option value="polar">Polar</option>

        </select>
  </>
    )
}


export default CountrySelect ;