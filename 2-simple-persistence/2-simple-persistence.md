# 웹 스토리지 API를 사용한 데이터 저장

## Storage Interface

### 종류 

Storage Interface: 인스턴스 직접 생성은 불가능, 전역 인스턴스인 `window.localStorage`와 `window.sessionStorage`를 사용해야 함

특정 세션, 특정 탭에 국한되는 sessionStorage

동일 출처의 여러 세션이 공유할 수 있으며 브라우저를 닫아도 데이터가 보존되는 localStorage
 
용도에 따라 구별해서 사용

eg. 짧은 수명 / 민감한 정보 > sessionStorage가 권장될 것

### 내용

String key:value pair만 저장할 수 있음

`getItem(key)` `setItem(key, value)` `clear()`

### 제약

1. String만 저장 (단순한 Obj라면 JSON 형태로)
2. 크기 제한 (현대 웹 브라우저들은 약 5MB 정도)
3. 보안: XSS Attack 위험성
  * [XSS 공격](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS)
    * "Same Origin인 척하기", code injection
    * 대응: sanitization, CSP, Output encoding
  * 정말 민감한 정보라면... (eg. JWT Token: refresh 등의 대책)

## 지원 여부 확인

[지원 여부 확인](./2-1-localStorage-support.js)

## 데이터 저장

* String: [Color Picker](./2-2-string.html)
* Simple object: []

## 데이터 제거

```javaScript
// 키가 없어도 예외가 발생하지 않는 안전한 제거
localStorage.removeItem('my-key');

// 모든 데이터 삭제
localStroage.clear();
```

