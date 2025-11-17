import React, { useState } from "react"; // 1. useState를 import 합니다.
import "./CategoryFilter.css";

const CategoryFilter = () => {
  // 2. 리스트가 열려있는지(true) 닫혀있는지(false) 기억하는 상태
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["의류", "전자기기", "화장품", "식품"];

  const handleCategoryClick = (categoryName) => {
    console.log(`${categoryName} 카테고리 클릭`);
  };

  // 3. '카테고리 선택' 버튼을 클릭하면 isOpen 상태를 반대로 뒤집는 함수
  const toggleList = () => {
    setIsOpen(!isOpen); // false -> true, true -> false
  };

  return (
    <div className="category-filter">
      {/* 4. '카테고리 선택' 버튼이 토글 스위치 역할을 합니다. */}
      <button className="filter-title-button" onClick={toggleList}>
        카테고리 선택
      </button>

      {/* 5. isOpen이 true일 때만(&&) 카테고리 리스트를 보여줍니다.
           이것을 '조건부 렌더링'이라고 합니다.
      */}
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
