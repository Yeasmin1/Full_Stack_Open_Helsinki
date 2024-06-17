import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  useEffect(() => {
    const results = countries.filter(country =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCountries(results);

    if (results.length === 1) {
      setSelectedCountry(results[0]);
    } else {
      setSelectedCountry(null);
    }
  }, [search, countries]);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>Country Search</h1>
      <Search search={search} setSearch={setSearch} />
      {selectedCountry ? (
        <CountryDetail country={selectedCountry} />
      ) : (
        <CountryList countries={filteredCountries} onSelectCountry={handleSelectCountry} />
      )}
    </div>
  );
};

export default App;
