import React from 'react';

const Cart = (props) => {
    const countries = props.countCountry;
    console.log(countries);
    const totalPopulation = countries.reduce((sum,country) => sum + country.population,0)
    return (
        <div>
            <h2>This is cart: {countries.length}</h2>
            <h3>Total Population: {totalPopulation}</h3>
        </div>
    );
};

export default Cart;