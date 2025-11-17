import React, { useState } from "react";
import "./PriceRangeFilter.css";

const PriceRangeFilter = () => {
  // 1. 최소 가격, 최대 가격을 위한 state 2개
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("0");

  // 2. '검색' 버튼 클릭 시
  const handleSearch = () => {
    console.log(`최소 가격: ${minPrice}, 최대 가격: ${maxPrice}`);
  };

  return (
    <div className="price-range-filter">
      {/* 최소 가격 입력창 */}
      <input
        type="number"
        className="price-input"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      {/* 최대 가격 입력창 */}
      <input
        type="number"
        className="price-input"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      {/* 검색 버튼 */}
      <button className="search-button" onClick={handleSearch}>
        검색
      </button>
    </div>
  );
};

export default PriceRangeFilter;
