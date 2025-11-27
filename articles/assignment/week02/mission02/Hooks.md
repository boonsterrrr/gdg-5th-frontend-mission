## useState: state 변수를 추가할 수 있는 훅

const[state 변수명, state 변수를 set할 함수명]
=useState(state 변수의 초기값)

그럼 그냥 변수를 쓰지 왜 state 변수를 쓸까?

### state변수 vs 일반 변수

- state 변수
  : 값 바꾸려면 set 해야함. 그리고 값 바뀌면 다시 렌더링됨.

- 일반 변수
  : 할당연산자로 변경 -> 값이 바뀌어도 다시 렌더링 안됨.

## useEffect: 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 훅

useEffect(()=> console.log(~~~));
