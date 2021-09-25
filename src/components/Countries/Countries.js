import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3/all')
            .then(Response => Response.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>

            <div>
                <h1>Countries List From Different Folder</h1>
            </div>
            <div className="countries ">
                {
                    countries.map(country => <Country key={country.name.common} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;