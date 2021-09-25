import './App.css';
import Countries from './components/Countries/Countries';

// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

/*function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  console.log(countries)
  return (
    <div>
      <h1>Travelling around the world!!</h1>
      <h3>There are {countries.length} countries around the world</h3>
      {
        countries.map(country => <Country name={country.name.common} capital={country.capital} flags={country.flags[0]}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div className="countries-container">
      <img className="flag" src={props.flags} alt="" />
      <h2>Country Name: {props.name}</h2>
      <h4>Capital: {props.capital}</h4>
    </div>
  )
} */


export default App;
