# 비동기 API

비동기 메서드/함수의 호출: 결과를 바로 받을 수 없으며, 동작이 완료되었을 때 반환하는 방식이 다르다

기본적 비동기 패턴: 콜백 함수(callback function)
비동기 API에 결과를 전달

Event

Event를 listening(청취)

EventTarget - addEventListener / removeEventListener

## `Promise`

비동기 동작의 최종 결과를 나타내는 객체
event listening을 대체

* 관련 MDN 문서
  * [JS Guide: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
  * [Global Object: Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* "Callback Hell" & Promise Chain
  * Promise를 사용하지 않았을 때 발생할 수 있는 가독성 이슈와 그에 대한 Promise의 해결법

### Promise와 Event Handler의 차이

* Event Handler는 여러번 호출될 수 있으나, Promise의 then 콜백은 한 번만 실행됨
* Promise의 then이 호출될 때 결과값이 있다면, then에 전달된 콜백함수로 해당 값을 전달함
  * Event에서는 listener가 추가되기 전이라면, 이벤트가 발생하더라도 해당 정보가 소실됨
* Promise는 고유의 에러 처리 메커니즘이 포함됨
  * Event에서는 에러 이벤트를 listening함


### Promise에서의 에러 처리 (`catch()`)

발생할 수 있는 에러는 반드시 처리되어야 함

unhandled rejection error => 뜻밖의 app 종료

### `async`/`await` 키워드

순차적 / 동기식으로 보이는 가독성

`then` 호출 대신 `await` 키워드를 사용

```javascript
async function listUsers() {
  try {
    const userList = await getUsers();
    console.log("User List: ");
    userList.forEach(user => {
      console.log(user.name);
    });
  } catch (error) {
    console.error("Cannot load user list:", error)
  }
}

```

### Promise의 병렬 사용 (`Promise.all()`, `Promise.allSettled()`)

Promise 배열을 인수로 받아 배열의 모든 Promise가 이행될 때까지 대기 - 거부되면 해당 Promise를 반환

만일 실패 Promise와 상관없이 해결된 Promise의 결과를 사용하고 싶다면: `Promise.allSettled`

allSettled는 항상 이행됨

```javascript
Promise.allSettled([
  // 원하는 병렬처리들을 배열로 전달
  getUser(1),
  getUser(2),
  getUser(3)
]).then(results => {
  results.forEach(result => {
    if (result.status === "fulfilled") {
      console.log('- 사용자: ', result.value.name);
    } else {
      console.log('- 에러: ', result.reason);
    }
  });
});
```

## `requestAnimationFrame`: 성능/지원 면에서 주목할 애니메이션 기능

## Event based API를 Promise를 사용하게 wrap할 수 있을까:

새 Promise 객체를 만들어 그 안에서 event listener를 등록하자

예시: `XMLHttpRequest`를 Promise화해보자

```javascript
function loadJSON(url){
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('load', event => {p
      try {
        resolve(JSON.parse(event.target.responseText));
      } catch (error) {
        reject(error);
      }
    });
    request.addEventListener('error', error => {
      reject(error);
    });

    request.open('GET', url);
    request.send();
  });
}

```

