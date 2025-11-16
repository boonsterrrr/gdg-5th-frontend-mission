// src/custom.d.ts

// .css 파일을 모듈로 인식하도록 함
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// 이미지 파일들을 모듈로 인식하도록 함
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
