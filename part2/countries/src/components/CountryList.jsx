import React from 'react';

const CountryList = ({ countries, onSelectCountry }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter.</div>;
  }

  return (
    <ul>
      {countries.map(country => (
        <li key={country.cca3}>
          {country.name.common} <button onClick={() => onSelectCountry(country)}>Show</button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
