import React, { useState } from "react";
import "./SortFilter.css";

const SortFilter = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { key: "alphabetical", name: "가나다순" },
    { key: "price", name: "가격순" },
  ];

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const handleSortClick = (key) => {
    onSortChange(key);
    setIsOpen(false);
  };

  return (
    <div className="sort-filter">
      <button className="filter-title-button" onClick={toggleList}>
        정렬 기준 선택
      </button>

      {isOpen && (
        <div className="sort-list">
          {sortOptions.map((option) => (
            <button
              key={option.key}
              className="sort-option-button"
              onClick={() => handleSortClick(option.key)}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortFilter;
