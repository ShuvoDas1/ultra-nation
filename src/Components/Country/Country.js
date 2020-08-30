import React, { useState } from 'react';

const Country = (props) => {
    const {name,capital,flag,population,area} = props.country;
    const showCountry = props.showCountry;
    // console.log(props.country);
    const [length,setArea] = useState('');
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {
        height: "50px"
    }
    const showArea = () => setArea(area);
    return (
        <div>
            <h3>Name: {name}</h3>
            <img style={flagStyle} src={flag} alt=""/>
            <h5>Capital: {capital}</h5>
            <p>Population: {population}</p>
            <p>Area: {length}</p> 
            <button onClick={()=>showCountry(name)}>Show capital</button>
            <button onClick={showArea}>Show Area</button>
            <button onClick={() =>handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;