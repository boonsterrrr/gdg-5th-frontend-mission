import React from "react";
import "./Navbar.css";

const Navbar = ({ onNavClick }) => {
  // 1. App -> Header -> Navbar로 onNavClick 함수를 받음
  return (
    <nav className="main-nav">
      {/* 2. 클릭 시 console.log가 아니라 onNavClick 함수를 'key'값과 함께 호출! */}
      <div onClick={() => onNavClick("category")}>카테고리 필터링</div>
      <div onClick={() => onNavClick("price")}>가격 범위 필터링</div>
      <div onClick={() => onNavClick("sort")}>상품 정렬</div>
    </nav>
  );
};

export default Navbar;
