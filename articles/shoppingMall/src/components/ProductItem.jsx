import React, { useState } from "react";
import "./ProductItem.css";

const ProductItem = ({ name, price, stock }) => {
  const [count, setCount] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleIncrease = () => {
    setCount((prevCount) => Math.min(prevCount + 1, stock));
  };

  const handleDecrease = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const handleAddToCart = () => {
    console.log(`${name}, ${count}개`);
    setIsAdded(true);
  };

  return (
    <div className="product-item">
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price} 원</p>
        <p className="product-stock">남은 수량: {stock}개</p>
      </div>

      <div className="product-controls">
        <div className="quantity-control">
          <button onClick={handleDecrease} disabled={isAdded}>
            -
          </button>
          <span className="quantity-display">{count}</span>
          <button onClick={handleIncrease} disabled={isAdded}>
            +
          </button>
        </div>

        <button
          className={`cart-button ${isAdded ? "disabled" : ""}`}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? "추가됨" : "장바구니"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
