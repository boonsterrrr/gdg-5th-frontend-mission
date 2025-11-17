import React from "react";
import SortFilter from "./SortFilter.jsx"; // 1. 방금 만든 '정렬 필터' import
import ProductItem from "./ProductItem.jsx"; // 2. '상품 아이템' import
import "./ProductSortPage.css"; // 3. 이 페이지 전용 'ProductSortPage.css' import

const ProductSortPage = () => {
  return (
    // 4. 'page-content' 대신 새 className 사용
    <main className="sort-page-content">
      {/* 5. 왼쪽: 정렬 기준 선택 */}
      <SortFilter />

      {/* 6. 오른쪽: 상품 목록 */}
      <div className="product-list-section">
        <div className="purchase-header">
          <h2 className="purchase-title">내 구매 내역</h2>
        </div>
        {/* 7. 이미지에 나온 3개 상품 (가나, 나다다, 다라) 렌더링 */}
        {/* '다라' 아이템은 이미지가 이상하지만, 다른 아이템들과 동일하게 처리합니다. */}
        <ProductItem name="가나" price={200} stock={13} />
        <ProductItem name="나다다" price={200} stock={13} />
        <ProductItem name="다라" price={100} stock={10} />{" "}
        {/* 가격, 수량은 임의로 설정 */}
      </div>
    </main>
  );
};

export default ProductSortPage;
