import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/gdg-logo.png";
import Navbar from "./Navbar.jsx";
import "./Header.css";

const Header = ({ onNavClick }) => {
  const navigate = useNavigate();
  const handleAdminClick = () => {
    navigate("/admin");
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="GDG Logo" className="header-logo" />
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
