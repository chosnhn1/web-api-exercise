# CSS

* 최신 브라우저 환경에서의 CSS: API로도 활용 가능
* CSS 객체 모델 (CSSOM)
* 주의: 브라우저 지원 확인

## 17.1 텍스트 영역 강조하기

* [CSS Custom Highlight API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API)
* [Range API](https://developer.mozilla.org/en-US/docs/Web/API/Range)

[활용 예시](./17-1-range.html)

## 17.2 텍스트의 깜빡임 현상 방지

Web Font loading 문제 ("FOUT"): CSS Font Loading API 사용

[적용 예시](./17-2-font-loading.html)

## 17.3 DOM 전환 애니메이션

[MDN 문서: View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)

`document.startViewTransition`

```js
// 예시: SPA에서 최상위 HTML Element인 View 사이를 전환할 때 cross-fade 효과 주기
function showAboutPage() {
  document.startViewTransition(() => {
    document.querySelector('#home-page').style.display = 'none';
    document.querySelector('#about-page').style.display = 'block';
  })
}
```

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 2s;
}
```

## 17.4 실행 중에 스타일시트 변경하기

SPA 등에서 동적으로 새 HTML 컨텐츠를 추가할 때 유용함

```js
const [stylesheet] = document.styleSheets;
stylesheet.insertRule(`
  .some-selector {
    background-color: red;
  }
`);
```

## 17.5 조건에 따른 CSS 클래스 설정

element의 `classList.toggle` 사용

* 참고: `classList.toggle` 대신 `classList.add`, `classList.remove`를 사용하는 경우

```js
someItem = document.queryselector('#item');
const isExpanded = true;
someItem.classList.toggle('expanded', isExpanded);
```

## 17.6 미디어 쿼리 확인

`window.matchMedia`로 확인/변화 감지 (이벤트 청취)

```js
const query = window.matchMedia('(prefers-color-scheme: dark)');
query.addEventListener('change', () => {
  if (query.matches) {
    // change page theme to dark mode:
  } else {
    // change page theme to light mode:
  }
})
```

## 17.7 엘리먼트의 계산된 스타일 구하기

`window.getComputedStyle`

주의: 호출 시에 브라우저가 스타일과 레이아웃을 다시 계산함 - 성능 issue

```html
<style>
  #content {
    background-color: blue;
  }

  .container {
    background-color: red;
    color: white;
  }
</style>
<div id="content" class="container">Which color does it have?</div>
```

```js
const content = document.querySelector('#content');
const styles = window.getComputedStyle(content);
console.log(styles.backgroundColor);
// You know that id selector has higher specificity than class selector: so bgcolor should be blue!
```

### vs. `element.style` 프로퍼티

예시:

```html
<style>
  #content {
    background-color: blue;
  }
</style>
<div id="content" style="color: white;">
  Content
</div>
```

이 경우 `element.style` prop으로 인라인 style을 참조할 수 있지만, CSS Stylesheet로 적용된 속성은 참조할 수 없음

`getComputedStyle`은 둘 모두 포함함

```js
const content = document.querySelector('#content');
console.log(content.style.backgroundColor); // = ""
console.log(content.style.color); // = "white"

const styles = window.getComputedStyle(content);
console.log(styles.backgroundColor);  // = 'rgb(0, 0, 255)' (확인 가능)
console.log(styles.color) // = 'rgb(255, 255, 255)';
```

