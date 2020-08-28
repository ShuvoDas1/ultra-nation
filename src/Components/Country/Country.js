import React from 'react';

const Country = (props) => {
    const {name,capital,flag,population} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {
        height: "50px"
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <img style={flagStyle} src={flag} alt=""/>
            <h5>Capital: {capital}</h5>
            <p>Population: {population}</p> 
            <button onClick={() =>handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;