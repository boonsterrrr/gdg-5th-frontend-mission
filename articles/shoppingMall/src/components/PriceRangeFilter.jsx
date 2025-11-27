import React, { useState } from "react";
import "./PriceRangeFilter.css";

const PriceRangeFilter = () => {
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("0");

  const handleSearch = () => {
    console.log(`최소 가격: ${minPrice}, 최대 가격: ${maxPrice}`);
  };

  return (
    <div className="price-range-filter">
      <input
        type="number"
        className="price-input"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <input
        type="number"
        className="price-input"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <button className="search-button" onClick={handleSearch}>
        검색
      </button>
    </div>
  );
};

export default PriceRangeFilter;
