import React from 'react';

const Search = ({ search, setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={search} 
        onChange={handleChange} 
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
