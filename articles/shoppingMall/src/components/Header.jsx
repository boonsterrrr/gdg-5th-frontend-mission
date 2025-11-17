import React from "react";
import logo from "../assets/gdg-logo.png";
import Navbar from "./Navbar.jsx"; // 1. Navbar 컴포넌트 사용
import "./Header.css";

const Header = ({ onNavClick }) => {
  // 2. App.jsx로부터 onNavClick 함수를 받아서...

  const handleAdminClick = () => {
    console.log("관리자 페이지 클릭"); // 관리자 버튼은 console.log 유지
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="GDG Logo" className="header-logo" />

        {/* 3. ...Navbar에게 그대로 전달 */}
        <Navbar onNavClick={onNavClick} />
      </div>
      <div className="header-right">
        <button className="admin-button" onClick={handleAdminClick}>
          관리자
        </button>
      </div>
    </header>
  );
};

export default Header;
