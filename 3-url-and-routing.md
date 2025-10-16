# URL and Routing

* [MDN](https://developer.mozilla.org/en-US/docs/Web/API/URL)

URL >> protocol, hostname, pathname, search

* protocol ("https:")
* hostname ("example.com")
* pathname ("/admin/login")
* search ("?username=sysadmin")

* hash ("#profile")
* host ("example.com:443")
* origin ("https://example.com:8888"): protocol + hostname + port

```js
URL().href
URL().toString()
```

## 상대적 URL 파악하기

```js
function resolveUrl(relativePath, baseUrl) {
  // URL constructor with two params
  return new URL(relativePath, baseUrl).href;
}

console.log(resolveUrl('/api/users', 'https://example.com'));

console.log(resolveUrl('/api/v1/users', 'https://example.com/api/v2'));
```

## URL에서 쿼리 파라미터 제거하기

```
```

## URL에 쿼리 파라미터 추가하기

## 쿼리 파라미터 읽기

## 간단한 Client-side 라우터 작성하기

## 패턴 일치 URL 찾기

URL Pattern API

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API)