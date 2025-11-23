# Fetch ()

## GET 호출:

fetch() 함수는 디폴트로 GET 방식으로 작동하고 GET 방식은 요청 전문을 받지 않기 때문에 옵션 인자가 필요가 없습니다.

ex. fetch("https://~).then((response)=>
console.log(response)
);

대부분의 REST API들은 JSON 형태의 데이터를 응답하기 때문에, 응답(response) 객체는 json()메서드를 제공합니다.

ex. fetch("https://~)
.then((response)=>response.json())
.then((data)=>console.log(data));

이 메서드를 호출하면, 응답 객체로부터 JSON 포맷의 응답 전문을 자바스크립트 객체로 변환하여 얻을 수 있습니다.

{
"userID":1,
"id":1,
"title": "~~"
"body": "~~"
}

## POST 호출

동일한 API를 대상으로 새로운 포스팅을 생성하기 위해 fetch()함수 써보겠음.
method 옵션을 POST로 지정해주고, headers 옵션을 통해 JSON 포맷을 사용한다고 알려줘야하고, 요청 전문을 JSON 포맷으로 직렬화하여 가장 중요한 body 옵션에 설정해줍니다.

## PUT, DELETE 호출

GET과 POST만큼은 아니지만, 원격 API에서 관리하는 데이터의 수정과 삭제를 위해서 PUT과 DELETE방식의 HTTP 호출을 해야 할 때가 있습니다.

PUT 방식은 method 옵션만 PUT으로 설정한다는 점 빼놓고는 POST 방식과 매우 흡사.

DELETE 방식에서는 보낼 데이터가 없기 때문에, headers와 body옵션이 필요가 없습니다.

# AXIOS

## GET 호출

- 형태: axios.get(url,[,config])
- 역할: 입력한 url에 존재하는 자원에 요청을 한다.

GET 서버에서 어떤 데이터를 가져오 보여주는 용도임.(ex. 사용자 리스트 가져오기)
만약 GET으로 로그인을 구현한다면 주소창에 id와 pw가 노출될 수도 있다
값이나 상태를 바꿀 수 없다.

## POST 호출

- 형태: axios.post("url",{data 객체}, [,config])
- 역할: 새로운 리소슬 생성

POST 메서드의 두 번째 인자는 본문으로 보낼 데이터를 설정한 객체 리터럴을 전달한다.
로그인, 회원가입 등 사용자가 생성한 파일을 서버에 업로드할 때 사용한다.
주소창에 쿼리스트링이 남지 않아 GET 보다 안전하다.

## DELETE 호출

- 형태: axios.delete(url,[,config])
- 역할: REST 기반 API 프로그램에서 DB에 저장된 내용을 삭제

## PUT 호출

- 형태: axios.put(url[,data[config]])
- 역할: REST 기반 API 프로그램에서 DB에 저장된 내용을 수정
