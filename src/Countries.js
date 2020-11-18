import React from "react";
import Country from "./Country.js";


const Countries = ({displayCountry})=>{

    return (
        <div className="container">
          {displayCountry.map((country) => {
            return <Country data={country}/> 

          })}

        </div>
    )
}






export default Countries ;
