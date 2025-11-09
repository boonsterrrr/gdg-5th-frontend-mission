import React from "react";
import logo from "../assets/gdg-logo.png";
import "./MainContent.css";

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <img src={logo} alt="Faded GDG Logo" className="faded-logo" />
      <p>검색 결과가 없습니다.</p>
    </main>
  );
};

export default MainContent;
