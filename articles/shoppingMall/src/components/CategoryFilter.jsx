import React, { useState } from "react";
import "./CategoryFilter.css";

const CategoryFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["의류", "전자기기", "화장품", "식품"];

  const handleCategoryClick = (categoryName) => {
    console.log(`${categoryName} 카테고리 클릭`);
  };

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category-filter">
      <button className="filter-title-button" onClick={toggleList}>
        카테고리 선택
      </button>
      {isOpen && (
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              className="category-button"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
