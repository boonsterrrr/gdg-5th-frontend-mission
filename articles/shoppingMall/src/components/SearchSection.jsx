import React, { useState } from "react";
import "./SearchSection.css";

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(searchTerm);
  };

  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="상품 검색..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        검색
      </button>
    </div>
  );
};

export default SearchSection;
