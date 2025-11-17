import React, { useState } from "react";
import SortFilter from "./SortFilter.jsx";
import ProductItem from "./ProductItem.jsx";
import "./ProductSortPage.css";

const allProducts = [
  { id: 1, name: "가나", price: 200, stock: 13 },
  { id: 2, name: "나다다", price: 200, stock: 13 },
  { id: 3, name: "다라", price: 100, stock: 10 },
];

const ProductSortPage = () => {
  const [sortKey, setSortKey] = useState("alphabetical");

  const handleSortChange = (key) => {
    setSortKey(key);
  };

  const getSortedProducts = () => {
    let sortedProducts = [...allProducts];
    if (sortKey === "alphabetical") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortKey === "price") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    return sortedProducts;
  };

  const sortedProducts = getSortedProducts();

  return (
    <main className="sort-page-content">
      <SortFilter onSortChange={handleSortChange} />

      <div className="product-list-section">
        <div className="purchase-header">
          <h2 className="purchase-title">내 구매 내역</h2>
        </div>

        {sortedProducts.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductSortPage;
