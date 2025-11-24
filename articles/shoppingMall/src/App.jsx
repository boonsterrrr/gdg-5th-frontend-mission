import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./App.css";
import Admin from "./admin/Admin.jsx";
import Maincontent from "./components/Maincontent.jsx";
import PriceRangePage from "./components/PriceRangePage.jsx";
import ProductSortPage from "./components/ProductSortPage.jsx";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState("category");

  const handleNavClick = (pageKey) => {
    setCurrentPage(pageKey);
  };

  const renderPage = () => {
    if (currentPage === "category") return <Maincontent />;
    if (currentPage === "price") return <PriceRangePage />;
    if (currentPage === "sort") return <ProductSortPage />;
    return <Maincontent />;
  };

  return (
    <div className="app-container">
      <Header onNavClick={handleNavClick} />
      {renderPage()}
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("category");

  const handleNavClick = (pageKey) => {
    setCurrentPage(pageKey);
  };

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
      <Header onNavClick={handleNavClick} />
      {renderPage()}
    </div>
  );
};

export default App;
