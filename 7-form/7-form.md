# 폼

## FormData API

[MDN API 문서](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

* Form Validation

## 7.1. 로컬 스토리지의 값으로 폼 필드 채우기

[적용 예시](./7-1-load-from-localstorage.js)

## 7.2. 

## 7.4.

`required` attr:

```html
<label for="username">Username</label>
<input type="text" name="username" id="username" required>
```

## 7.5.

`min` & `max` props, `step` prop

```html
<label for="quantity">Quantity</label>
<input type="number" name="quantity" id="quantity" min="1" max="10">
```

## 7.6.

`pattern` attr: RegEx를 이용한 HTML에서의 유효성 검사

```html
<label for="username">Username: </label>
<input type="text" name="username" id="username" pattern="[A-Za-z0-9]+">
```


## 7.7.