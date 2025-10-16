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
