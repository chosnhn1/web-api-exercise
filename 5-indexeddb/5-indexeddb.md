# IndexedDB

v. Persistence Storages

* 객체 저장소 (v. JSON 직렬화)
* 검색 용이, 인덱스 저장
* Versioning, Transaction 지원

## Concepts

### `Key`

RDB의 primary key와 유사

* Inline key: 객체 내에 저장
* out-of-line key: 객체 내부에 저장되지 않고 객체 생성 시 별도 인수로 전달

### Transaction

DB 작업의 논리적 묶음

데이터 무결성 확보를 위해 사용됨

### Request

## 

1. DB
2. Transaction
3. Obj Storage
4. Request
  * `success` Event
  * Data requested

## 5.1 데이터베이스의 객체를 만들고, 읽고, 삭제하기

[예제 파일](./5-1-db.js)

* 패턴
  1. Transaction 생성
  2. Object Store 접근
  3. Object Store의 원하는 메서드 호출
  4. `success` 이벤트 listening

## 5.2 기존 데이터베이스 업그레이드

`upgradeneeded` 이벤트 청취 통해 새 객체 스토어 추가 필요 여부를 확인

* [예제 파일](./5-2-upgrade.js)
  * `todos`라는 저장소에 `people`이라는 저장소가 추가되는 새 버전의 예시

## 5.3 인덱스 조회

* [예제 파일](./5-3-index.js)
  * `employees`라는 직원 DB: `name`, `department`, `id`(key) column
  * `department`에 인덱스를 정의하고 조회할 수 있도록 하기
    * `openDatabase`: 정의
    * `getEmployees`: `department`를 통한 조회

* 참고: 인덱스 키의 범위를 통해 조회할 수도 있음 (`IDBKeyRange` 인터페이스)
* [MDN 문서](https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange)
  * `IDBKeyRange.lowerBound`
  * `IDBKeyRange.upperBound`
  * `IDBKeyRange.bound`
  * `IDBKeyRange.only`

## 5.4 커서를 사용한 문자열 값 검색

[MDN 문서: API 기초 용어 - Cursor](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor)

[예제 파일](./5-4-cursor.js)

* `openCursor` -> `IDBRequest`

## 5.5 대규모 데이터 페이징

[예제 파일](./5-5-paging.js)

## 5.6 IndexedDB API와 Promise 사용하기

IndexedDB API를 Promise로 wrap하기

[예제 파일](./5-6-promise-wrapping.js)
