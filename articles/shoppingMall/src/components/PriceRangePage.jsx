import React from "react";
import PriceRangeFilter from "./PriceRangeFilter.jsx";
import ProductItem from "./ProductItem.jsx";
import "./Page.css";

const PriceRangePage = () => {
  return (
    <main className="page-content">
      <PriceRangeFilter />
      <div className="product-list-section">
        <div className="purchase-header">
          <h2 className="purchase-title">내 구매 내역</h2>
        </div>
        <ProductItem name="원피스" price={500} stock={13} />
        <ProductItem name="청바지" price={200} stock={13} />
      </div>
    </main>
  );
};

export default PriceRangePage;
