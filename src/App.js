import React, {useState} from "react";
import './App.css';
import Countries from "./Countries";
import countriesAll from "./countriesAll.json";
import CountrySearchFilter from "./CountrySearchFilter";
import Heading from "./Heading";
import BackButton from "./BackButton";

function App() {
  const [countryData ] = useState(countriesAll)
  const [displayCountry , setDisplayCountry] = useState(countriesAll)



  return (
    <div className="App">
     <Heading />
     <BackButton />
     <CountrySearchFilter countryData= {countryData} setDisplayCountry={setDisplayCountry} />
     <Countries displayCountry={displayCountry}/>
    </div>
  );
}

export default App;
