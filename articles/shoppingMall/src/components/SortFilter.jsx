import React from "react";
import "./SortFilter.css"; // 이 파일도 새로 만듭니다.

const SortFilter = () => {
  // TODO: 이미지를 보면 토글 기능이 없어 보이지만,
  // '카테고리 필터'처럼 나중에 토글 기능을 추가할 수 있습니다.
  return (
    <div className="sort-filter">
      <button className="filter-title-button">정렬 기준 선택</button>
    </div>
  );
};

export default SortFilter;
