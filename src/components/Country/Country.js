import React from 'react';
import './Country.css'

const Country = (props) => {

    const { name, capital } = props.country;

    return (
        <div className="country-details">
            <h2>Country Name: {name.common}</h2>
            <h4>Capital: {capital}</h4>
        </div>
    );
};

export default Country;