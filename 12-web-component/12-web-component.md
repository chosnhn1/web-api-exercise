# 웹 컴포넌트

고유한 동작을 하는 HTML 엘리먼트 작성하기

[MDN 문서: 웹 컴포넌트 API 문서](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
[MDN 문서: 커스텀 엘리먼트 사용하기](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)

```js
class MyComponent extends HTMLElement {
  // DOM에 커스텀 엘리먼트가 추가될 때 호출되는 생명주기 함수 connectedCallback():
  connectedCallback() {
    this.textContent = "Here comes MyComponent!";
  }
}
```

* `connectedCallback`
* `disconnectedCallback`
* `attributeChangedCallback`

## 주요 사용법

### 등록

전역객체 `customElements` 사용

```js
// 사용자 객체
class MyComponent extends HTMLElement {
  //...
}

// 등록
customElements.define('my-component', MyComponent)
```

### 사용

```html
<my-component></my-component>
<!-- (명세상) 이름은 반드시 하이픈을 사용하며, 항상 닫는 태그를 사용해야 함 -->
```

### 웹 컴포넌트에 HTML Markup을 포함하는 법

1. `connectedCallback`에서 `document.createElement()`하기
2. `<template>` 엘리먼트 사용하기

### 슬롯 (`<slot>`)

자식 컨텐츠의 placeholder 역할

```html
<template>
  <h2><slot name="name"></slot></h2>
  <slot></slot>
</template>
```

### Shadow DOM

main DOM과 분리된 Element 집합

참고: CSS 스타일 범위 on shadow DOM

### Light DOM

## 12.1 오늘 날짜를 보여주는 컴포넌트 작성

[사용 예시](./12-1-today.html)

## 12.2 임의의 날짜를 포맷하는 컴포넌트 작성

[사용 예시](./12-2-date-formatter.html)

## 12.3 피드백 컴포넌트 작성

[사용 예시](./12-3-feedback-component.html)

## 12.4 프로필 카드 컴포넌트 작성

`<slot>` 사용

[사용 예시](./12-4-profile-card.html)

CSS `:host` selector: Shadow DOM을 자식으로 포함하는 엘리먼트인 "Shadow Host"를 선택

## 게으른 로딩 이미지 컴포넌트 작성

`IntersectionObserver` (참고: [DOM 엘리먼트 감시 (6장)](../6-observing-dom-elements/6-observing-dom-elements.md))

* 참고: `loading` 속성을 지원하는 오늘날의 `<img>`

## 12.6 더보기 컴포넌트 작성

버튼을 클릭할 때 컨텐츠를 보여주고 감추는 컴포넌트

* 토글 버튼
* 컨텐츠 내용

[사용 예시](./12-6-disclosure.html)

## 12.7 스타일이 적용된 버튼 컴포넌트 작성

* default 기본형 버튼과 `primary`, `danger` 변형(variant)이 있는 버튼 요소 작성 예시

[사용 예시](./12-7-button.html)

