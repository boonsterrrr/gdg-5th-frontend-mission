import React from "react";
import PriceRangeFilter from "./PriceRangeFilter.jsx"; // 1. 방금 만든 필터 import
import ProductItem from "./ProductItem.jsx"; // 2. 상품 목록을 위해 import
import "./Page.css"; // 3. 이 페이지의 레이아웃을 위해 Page.css 사용

const PriceRangePage = () => {
  return (
    // 4. page-content가 세로(column)로 배치
    <main className="page-content">
      {/* 5. 상단에 가격 범위 필터 렌더링 */}
      <PriceRangeFilter />

      {/* 6. '내 구매 내역' 섹션 (MainContent.css의 스타일 재활용) */}
      <div className="product-list-section">
        <div className="purchase-header">
          <h2 className="purchase-title">내 구매 내역</h2>
        </div>

        {/* 7. 이미지에 맞게 price prop 수정 */}
        <ProductItem name="원피스" price={500} stock={13} />
        <ProductItem name="청바지" price={200} stock={13} />
      </div>
    </main>
  );
};

export default PriceRangePage;
