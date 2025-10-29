# 콘솔 다루기

* `console.log()`하기 (친숙함)
* 메시지의 그룹화
* 카운터 사용
* 출력 꾸미기 (표, CSS)
* 로그 수준 부여하고 필터링하기 (에러, 경고, 디버그)

## 16.1 콘솔 출력 꾸미기

[활용 예시](./16-1-styling.js)

## 16.2 로그 수준 사용

[예시](./16-2-leveling.js)

## 16.3 이름이 정해진 로그 함수 사용하기

`Function.prototype.bind` 활용하기

[`Function.prototype.bind` MDN 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

[예시](./16-3-named.js)

## 16.4 객체 배열을 표로 출력

[활용 예시](./16-4-table.js)

## 16.5 콘솔 타이버 사용

`console.time`, `console.timeEnd`

```js
console.time('loadTransactions');

const data = await fetch('/api/users/123/transactions');

console.timeEnd('loadTransactions');
```

참고: 15장에서의 성능 API vs. console.time

## 16.6 콘솔 그룹 사용

`console.group()`

[활용 예시](./16-6-group.js)

그룹을 접은 상태로 시작하려면 `console.groupCollapsed`

## 16.7 카운터 사용

`console.count()`

[예시](./16-7-count.js)

## 16.8 변수명과 변숫값 기록

object shorthand notation 사용:

```js
const username = 'sysadmin';

console.log({ username });
```

## 16.9 스택 추적 기록

`console.trace`

```js
function foo() {
  function bar() {
    console.trace();
  }

  bar();
}

foo();
```

## 16.10 기댓값 검증

`console.assert` (단언문)

주의: 에러가 발생되나, 함수는 계속 실행됨

```js
function updateUser(user) {
  // user.id에 대한 기댓값 검증
  console.assert(user.id !== null, 'user.id must not be null');

  return fetch(`/api/users/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
```

## 16.11 객체의 프로퍼티 조사

`console.dir`

예시: `console` 객체 스스로를 조사하기 (`prototype` chain 또한 포함됨)

```js
console.dir(console);
```
