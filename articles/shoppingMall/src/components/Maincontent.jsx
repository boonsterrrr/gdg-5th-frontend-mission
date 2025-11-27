import React from "react";
import ProductItem from "./ProductItem.jsx";
import CategoryFilter from "./CategoryFilter.jsx";
import "./Maincontent.css";

const Maincontent = () => {
  return (
    <main className="main-content">
      <CategoryFilter />
      <div className="product-list-section">
        <div className="purchase-header">
          <h2 className="purchase-title">내 구매 내역</h2>
        </div>
        <ProductItem name="원피스" price={1000} stock={13} />
        <ProductItem name="청바지" price={1000} stock={13} />
      </div>
    </main>
  );
};

export default Maincontent;
