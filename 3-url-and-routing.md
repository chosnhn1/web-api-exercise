# URL and Routing

URL >> protocol, hostname, pathname, search

* protocol ("https:")
* hostname ("example.com")
* pathname ("/admin/login")
* search ("?username=sysadmin")

## 상대적 URL 파악하기

```js
function resolveUrl(relativePath, baseUrl) {
  return new URL(relativePath, baseUrl).href;
}

console.log(resolveUrl('/api/users', 'https://example.com'));

```

## URL에서 쿼리 파라미터 제거하기

## URL에 쿼리 파라미터 추가하기

## 쿼리 파라미터 읽기

## 간단한 Client-side 라우터 작성하기

## 패턴 일치 URL 찾기