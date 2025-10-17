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

  