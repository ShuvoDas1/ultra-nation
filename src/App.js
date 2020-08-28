import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Components/Country/Country';

function App() {
 const [countries,setCountries]= useState([])
 const [countCountry,setCountry] = useState([]);

 useEffect(()=>{
   fetch('https://restcountries.eu/rest/v2/all')
   .then(res => res.json())
   .then(data => {
      setCountries(data);
    })
    .catch(error => console.log(error))
 },[])

 const handleAddCountry = (country) => {
    const newState = [...countCountry,country];
    setCountry(newState);
  }
  return (
    <div>
        <h1>Country Loaded:{countries.length}</h1>
        <h2>Country added: {countCountry.length}</h2>
        <div>
          <ul>
            {
              countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
            }
          </ul>
        </div>
    </div>
  );
}

export default App;
