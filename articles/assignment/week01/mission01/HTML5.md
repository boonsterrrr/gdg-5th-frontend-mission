# HTML5

html5 문서는 반드시 `<!DOCTYPE html>`로 시작함
실제적인 document는 2행부터 시작되고 <html></html>사이에 적으면 됨.

## 요소

<p>Hello</p>
p: 시작태그
/p: 종료태그
Hello: 컨텐츠

### 요소들은 중첩 될 수 있음

## 어트리뷰트

요소의 성질, 특징을 정의하는 명세.
요소의 추가적 정보를 제공함. (파일의 경로 혹은 크기 등등.)

<img src="html.png" width="104" height="142">
src: 어트리뷰트명
html.png: 어트리뷰트 값

### 어트리뷰트 종류

- id: 유일한 식별자를 요소에 지정. 중복 불가
- class: 스타일시트에 정의된 class를 요소에 지정. 중복 가능
- hidden: css의 hidden과는 달리 의미상으로도 브라우저에 노출되지 않게 함.
- lang: 지정된 요소의 언어를 지정
- style: 요소에 인라인 스타일 지정

### 시맨틱 태그

- header: 헤더를 의미 (상단)
- nav: 내비게이션을 의미
- aside: 사이드에 위치한 공간을 의미 (사이드)
- section: 본문의 여러 내용을 포함하는 공간을 의미 (본문)
- article: 본문의 주내용이 들어가는 공간을 의미
- footer: 푸터를 의미 (하단)

### tag

- style:
  <style>
     body {
        background-color: yellow;
        color: blue;
     }
  </style>

-link:

 <link rel="stylesheet" href="style.css">
 
-body:
html문서에서 단 하나만 존재.

## Text tag

### 제목태그

<h1></h1>,..<h6></h6>

### 글자 형태

- 일반체: <p></p>
- 볼드체: <b></b> /의미론적 중요성 의미인 strong : <strong></strong> (볼드체랑 똑같이 표현되긴함)
- 기울임: <i></i> /의미론적 중요성 의미인 em : <em></em> (기울임체랑 똑같이 표현됨.)emphasize
- small: <small></small>
- 하이라이트: <mark></mark>
- 제거선: <del></del>
- 아래 밑줄: <ins></ins>
- 기존글자의 반크기로 아래쪽에: <sub></sub>
- 기존글자의 반크리로 위쪽에: <sup></sup>

### 본문 태그

그냥 일반적인: <p></p>
문장 중간에 끊고 엔터하고 쓰고 싶을 때: <br></br>
연속 공백을 넣고 싶을 때: &nbsp; (html은 공백 1개 이상이면 1개로 인식해서 여러 스페이스 넣고 싶으면 문장 사이에 저 용어 원하는 공백 갯수만큼 넣으면 됨)
작성한 그대로 브라우저에 표시하고 싶을 때: <pre></pre> (저기 안에 표시한 대로 그대로 표현됨)
수평줄, 구분줄 넣고 싶을 때: <hr>
인용 표시하고 싶을 때: <q></q> (큰따옴표로 인용함)
인용문 상자 왼쪽에 긴줄 생기게 하고 싶을 때: <blockquote></blockquote>

## 하이퍼링크

### href 어트리뷰트

<!DOCTYPE html>
<html>
  <body>
    <a href="http://www.google.com">Visit google.com!</a>
  </body>
</html>

## 목록

순서없는 목록(.): <ul></ul> (unordered list)

순서있는 목록(1,2,3.): <ol></ol> (ordered list)

- 순서 있는 목록에서 순서 표현되는 문자 바꿀 수 있음: <ol type=" ">꼴로.
  숫자 기본: "1"
  대문자 알파벳: "A"
  소문자 알파벳: "a"
  대문자 로마숫자: "I"
  소문자 로마숫자: "i"

-start 어트리뷰트로 리스트 시작값 지정할 수 있음: <ol start="3">꼴로
-reversed 어트리뷰트 지정하면 리스트 순서값 역으로 표현할 수 있음: <ol reversed>꼴로\

중첩 가능.

## 테이블

- table: 표를 감싸는 태그
- tr: 표 내부의 행
- th: 행 내부의 제목 셀(table heading, 구분되는 목록?)
- td: 행 내부 일반 셀(그냥 채워넣는 일반적인 값)
  <!DOCTYPE html>
  <html>
    <body>
      <table border="1">
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Score</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>80</td>
        </tr>
      </table>
    </body>
  </html>

<tr>안에 <th>, <tr>안에 <td>

## 이미지나 미디어 등등 삽입

### 이미지 삽입

- src: 이미지 파일 경로
- alt: 이미지 파일이 없을 때 표시되는 "문장"
- width: 이미지의 너비(css에서 지정하는게 보편적)
- height: 이미지 높이 (css에서 지정하는게 보편적)

### 미디어 삽입

- src: 음악 파일 경로
- preload: 재생 전에 음악 파일을 모두 불러올 것인지 지정
- autoplay: 음악 파일을 자동재생 개시할 것인지 지정
- loop: 음악 반복재생할 것인지
- controls: 음악 재생도구 표시할 것인지.(외관은 브라우저 마다 다름)

### 비디오 삽입

- src: 동영상 파일 경로
- poster: 썸네일
- preload: 재생 전에 동영상 파일 다 불러올 것인지
- autoplay: 자동 재생 할 것인지
- loop: 반복 재생 할 것인지
- controls: 재생 도구 표시할 것인지
- width, height: 동영상 너비, 높이

## 폼 태그

### input

- button 버튼 생성
- checkbox checkbox 생성
- color 컬러 선택 생성
- date date control (년월일) 생성
- datetime date & time control (년월일시분초) 생성. HTML spec에서 drop되었다.
- datetime-local 지역 date & time control (년월일시분초) 생성
- email 이메일 입력 form 생성. subumit 시 자동 검증한다.
- file 파일 선택 form 생성
- hidden 감추어진 입력 form 생성
- image 이미지로 된 submit button 생성
- month 월 선택 form 생성
- number 숫자 입력 form 생성
- password password 입력 form 생성
- radio radio button 생성
- range 범위 선택 form 생성
- reset 초기화 button 생성
- search 검색어 입력 form 생성
- submit 제출 button 생성
- tel 전화번호 입력 form 생성
- text 텍스트 입력 form 생성
- time 시간 선택 form 생성
- url url 입력 form 생성
- week 주 선택 입력 form 생성

### select

select select form 생성
option option 생성
optgroup option을 그룹화한다

### textarea

<textarea></textarea>
