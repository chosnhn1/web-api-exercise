# 웹 애니메이션 API

## Keyframe 기반 애니메이션

CSS3: `@keyframes` rule & `animation` prop

시작/마지막 스타일, 진행 시간 설정

```css
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.some-element {
  animation: fade 250ms;
}
```

### JavaScript에서의 적용

Web Animation API:

```js
const element = document.querySelector('.some-element');
element.animate([
  { opacity: 0 },
  { opacity: 1 },
], {
  duration: 250
});
```

## Animation 객체 사용의 유의점

* 레이아웃 변경을 가져오는 prop (`height`, `padding`)
  1. 레이아웃 변경!
  2. 부자연스러움
  3. 성능 문제
* 적용 유리한 prop (`opacity`, `transform`)
  1. 레이아웃 변경 X
  2. 성능 유리 (GPU 가속)

  
## 8.5. 스크롤 프로그레스 바

`ScrollTimeline()` instance

* [예제](./8-5-scroll-progress.js)
* [MDN 문서](https://developer.mozilla.org/en-US/docs/Web/API/ScrollTimeline)

## 8.6. 통통 튀는 엘리먼트

translateY를 이용한 bounce

* [예제](./8-6-bounce.js)

주의: `forEach()`와 같은 배열 메서드와 비동기 동작 (`for`-`of`,일반 `for` 루프 vs. `forEach` 배열 메서드)

## 8.7. 여러 애니메이션 동시 실행

## 8.8. 로딩 애니메이션

## 8.9. 사용자 설정에 따르는 애니메이션

* OS/브라우저의 접근성 기능, 성능 기능 등으로 애니메이션 동작을 줄이도록 설정된 경우
* `window.matchMedia().matches` 확인
* [`prefers-reduced-motion` 미디어 기능 MDN 문서](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
* [`matchMedia()` 메서드 MDN 문서](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)

```js
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // 원래 의도한 애니메이션

} else {
  // 애니메이션을 줄이거나, 아예 보여주지 않기

}
```