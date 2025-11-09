import React from "react";
import logo from "../assets/gdg-logo.png";
import "./Header.css";

const Header: React.FC = () => {
  const handleNavClick = (message: string) => {
    console.log(message);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="gdg-logo" className="header-logo" />
        <nav>
          <div onClick={() => handleNavClick("카테고리 필터링 클릭")}>
            카테고리 필터링
          </div>
          <div onClick={() => handleNavClick("가격 범위 필터링 클릭")}>
            가격 범위 필터링
          </div>
          <div onClick={() => handleNavClick("상품 정렬 클릭")}>상품 정렬</div>
        </nav>
      </div>
      <div className="header-right">
        <button
          className="admin-button"
          onClick={() => handleNavClick("관리자 페이지 클릭")}
        >
          관리자
        </button>
      </div>
    </header>
  );
};

export default Header;
