import React from "react";

const Country = ({data}) =>{
   
    return (
        <div className="card">
            <img className="imgSize" src={data.flag} alt=""/>
            <h2 className="countryName">{data.name}</h2>
            <ul className ="information">
                <li><b>Population</b>: {data.population.toLocaleString()} </li>
                <li><b>Region</b>: {data.region}</li>
                <li><b>Capital</b>: {data.capital}</li>
            </ul>
    
        </div>
    )
}





export default Country;