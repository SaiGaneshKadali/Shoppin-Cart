import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.toLowerCase() === 'bags') {
      navigate('/bags');
    } else if (searchQuery.toLowerCase() === 'watches') {
      navigate('/watches');
    } else if (searchQuery.toLowerCase() === 'mobiles') {
      navigate('/mobilesLaptops');
    } else if (searchQuery.toLowerCase() === 'grocery') {
      navigate('/grocery');
    } else {
      alert(`No results found for "${searchQuery}".`);
    }
  };

  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="search here" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button className="search-btn" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
