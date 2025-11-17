import React, { useState } from "react";
import Header from "./components/Header.jsx";
import "./App.css";

import Maincontent from "./components/Maincontent.jsx";
import PriceRangePage from "./components/PriceRangePage.jsx";
import ProductSortPage from "./components/ProductSortPage.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState("category");

  // 1. 바로 이 함수가 '페이지 변경'을 담당합니다.
  const handleNavClick = (pageKey) => {
    setCurrentPage(pageKey); // 이 함수가 실행되면 state가 바뀌고 App이 재실행됩니다.
  };

  // 2. state가 바뀌면 이 함수가 새 state 값으로 다시 실행됩니다.
  const renderPage = () => {
    if (currentPage === "category") {
      return <Maincontent />;
    }
    if (currentPage === "price") {
      return <PriceRangePage />;
    }
    if (currentPage === "sort") {
      return <ProductSortPage />;
    }
    return <Maincontent />;
  };

  return (
    <div className="app-container">
      {/* 3. Header에게 '페이지 변경 함수'를 onNavClick이란 이름으로 전달 */}
      <Header onNavClick={handleNavClick} />
      {renderPage()}
    </div>
  );
};

export default App;
