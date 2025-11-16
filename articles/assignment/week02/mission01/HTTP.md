# HTTP

HyperText Transper Protocol

- 웹에서 데이터를 주고 받는 서버-클라이언트 모델의 프로토콜
- 클라이언트의 요청과 서버의 응답을 통해 작동
  (난 html이랑 헷갈렸었다)

### HTTP 요청

- start line
  : 요청 메서드, 요청할 경로, HTTP 버전 정보 포함
  : 어떤 방식으로 어떤 자원을 어떤 버전의 http로 요청할 것인지

- headers
  : 요청에 대한 부가 정보

- body
  : 실제 전송할 데이터

### HTTP 주요 메서드

- GET: 리소스 조회
- POST: 리소스를 추가, 등록
- PUT: 리소스를 교체, 없으면 새로 생성
- PATCH: 리소스의 일부를 수정
- DELETE: 리소스를 삭제

### HTTP 응답

- status line
  : HTTP 버전, HTTP 상태코드, 상태 메시지

-headers
: 응답에 대한 부가 정보

- body
  : 실제 응답 데이터

### HTTP 주요 상태 코드

- 200 OK
- 201 Created
- 400 Bad Request
- 401 Not Found
  ...

# 네트워크 자료 조사 (네트워크 통신의 기본 흐름)

---

## **1. 브라우저는 서버 주소를 어떻게 찾는가? (DNS로 찾음)**

- www.google.com을 쳤을 때, 컴퓨터는 google.com이 어디에 있는지 몰라서 IP 주소를 알아내야 함

### DNS가 동작하는 과정

1. www.google.com 주소를 요청

2. PC에 설정된 DNS 서버에게 https://www.google.com/의 IP 주소가 뭔지 물어봄

3. Local DNS 서버가 캐시(누군가 최근에 물어봄)에 답이 없다면 Root DNS 서버에 물어봄

4. Root DNS 서버(.com, .org 등의 최상위 도메인 서버들의 주소 목록 보유) -> TLD DNS 서버(.com) > Authoritative DNS(google.com) 서버 순으로 물어봄

5. Local DNS 서버가 PC에 IP주소를 알려주면 브라우저는 이제 172.217.14.228로 가면 된다고 인지함

---

## **2. 데이터는 어떻게 안전하게 전달되는가? (TCP/IP 프로토콜 이용)**

- IP 주소를 알았으면 그곳에 HTTP 요청 메시지를 보낼 때 핵심 프로토콜 TCP/IP이 사용됨

**`IP (Internet Protocol)`**: 데이터 조각(패킷)에 주소(출발지/도착지 IP)를 붙여서 보내는 역할을 함 (편지 봉투에 주소 쓰기)

**`TCP (Transmission Control Protocol)`**

- 연결 지향: 데이터를 보내기 전에 서버와 "지금부터 데이터 보낼게 준비됐어?"라고 확인하는 과정(3-Way Handshake(sync/ack))을 거침

- 신뢰성 보장: 데이터를 쪼개서 보낼 때 번호를 매겨서 보내고, 서버가 "나 3번 못 받았어"라고 하면 다시 보내줍니다.

- HTTP와의 관계: 우리가 보낼 HTTP 메시지는 TCP에 의해 잘 포장되고, IP 주소가 붙어서 인터넷으로 전송됩니다.

---

## **3. 브라우저 렌더링 과정 (웹사이트를 구현하는데 알아두면 좋음)**

### 브라우저 주소창에 www.google.com을 치면 일어나는 일 (프론트엔드 면접 단골 질문)

1. 사용자가 브라우저에 www.google.com 입력

2. 브라우저가 DNS를 통해 google.com의 IP 주소를 찾음

3. 브라우저가 해당 IP 주소를 사용하는 서버와 TCP 연결을 맺음 (3-Way Handshake)

4. 연결이 완료되면, 브라우저가 서버에게 HTTP Request (요청) 메시지를 보냄 (예: GET / HTTP/1.1)

5. 서버가 요청을 처리하고 브라우저에게 HTTP Response (응답) 메시지를 보냄 (예: 200 OK와 함께 index.html 파일 내용)

6. TCP 연결 종료

---

## 네트워크에서 프론트엔드의 핵심

- 브라우저가 응답으로 받은 HTML/CSS/JS 파일을 렌더링해서 사용자에게 화면을 보여줌

**`개발자 도구 활용`**: 브라우저에서 F12를 눌러 Network 탭을 켜보고, **Timing** 탭을 보면 Initial Connection(TCP), Request/Response 등 확인 가능

---

## 참고 문헌

https://mangkyu.tistory.com/91

https://developer.mozilla.org/ko/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works

---

## HTTP 및 네트워크 공부할 때 알면 좋은 개념

### **HTTP 및 네트워크 기본 개념**

**`HTTP/HTTPS 개념`**

- HTTP(HyperText Transfer Protocol)란?
- HTTPS(SSL/TLS를 이용한 보안 HTTP)란?
- HTTP 1.1 vs HTTP/2 vs HTTP/3 비교

**`HTTP 메서드`**

- GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD 등

**`HTTP 상태 코드`**

- 2xx (성공): 200 OK, 201 Created
- 3xx (리다이렉션): 301 Moved Permanently, 302 Found
- 4xx (클라이언트 오류): 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found
- 5xx (서버 오류): 500 Internal Server Error, 502 Bad Gateway

**`CORS (Cross-Origin Resource Sharing)`** -동일 출처 정책(Same-Origin Policy) 개념
-Preflight Request와 OPTIONS 메서드

**`쿠키 & 세션 & 토큰`** -쿠키(Cookie): 상태 유지 및 보안 이슈 -세션(Session): 서버 측에서 관리하는 사용자 상태
-JWT (JSON Web Token) vs 세션 방식 차이
**`캐시 & CDN`**
-HTTP 캐싱(Cache-Control, ETag, Last-Modified) -브라우저 캐시 vs 서버 캐시
-CDN(Content Delivery Network)의 역할

### **DNS & 도메인 관련 개념**

**`DNS(Domain Name System)`**

- DNS가 하는 역할과 작동 방식
- DNS Lookup 과정
- A, CNAME, TXT, MX, NS 레코드

**`도메인 & URL 구조`**

- URL의 구성 요소 (프로토콜, 도메인, 경로, 쿼리 파라미터)
- www.example.com에서 ‘www’, ‘example’, ‘.com’ 각각의 의미

### **TCP/IP 및 네트워크 프로토콜**

**`TCP/IP 개념`**

- TCP(Transmission Control Protocol) vs UDP(User Datagram Protocol)
- 3-way Handshake 및 4-way Handshake

**`IP 주소와 포트`**

- 공인 IP vs 사설 IP
- IPv4 vs IPv6
- 포트(80, 443, 3000, 8080 등) 개념 및 역할

**`DNS over HTTPS (DoH) & DNS over TLS (DoT)`**

- 네트워크 보안 관련 최신 트렌드
