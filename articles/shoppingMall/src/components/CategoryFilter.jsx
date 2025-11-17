import React, { useState } from "react";
import "./CategoryFilter.css";

const CategoryFilter = () => {
  // 1. 리스트가 열렸는지(isOpen) 기억하는 상태
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["의류", "전자기기", "화장품", "식품"];

  const handleCategoryClick = (categoryName) => {
    console.log(`${categoryName} 카테고리 클릭`);
  };

  // 2. '카테고리 선택' 버튼 누르면 isOpen 상태를 뒤집음
  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category-filter">
      <button className="filter-title-button" onClick={toggleList}>
        카테고리 선택
      </button>

      {/* 3. isOpen이 true일 때만 리스트를 보여줌 */}
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
