import React from "react";
import "./Navbar.css";

const Navbar = ({ onNavClick }) => {
  return (
    <nav className="main-nav">
      <div onClick={() => onNavClick("category")}>카테고리 필터링</div>
      <div onClick={() => onNavClick("price")}>가격 범위 필터링</div>
      <div onClick={() => onNavClick("sort")}>상품 정렬</div>
    </nav>
  );
};

export default Navbar;
