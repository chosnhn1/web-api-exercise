# UI 엘리먼트

* Pop-up dialog: `<dialog>`
* Detailed view: `<details>`
* Popover: ``
* Notifications:

## 13.1 경고창 작성

[적용 예시](./13-1-warning.html)

* `showModal()`, `close()` 메서드
* 백드롭 양식 설정:

```css
  #alert::backdrop {
    background: rgba(0, 0, 0, 0.75);
  }
```

## 13.2 확인창 작성

[적용 예시](./13-2-confirm.html)

`returnValue`의 전달과 사용

## 13.3 확인창 웹 컴포넌트 작성

[참고: 웹 컴포넌트](../12-web-component/12-web-component.md)

## 13.4 더보기 엘리먼트 사용

[MDN 문서](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)

[활용 예시](./13-4-details.html)

## 13.5 팝오버 표시

[MDN 문서](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)

[활용 예시](./13-5-popover.html)

## 13.6 팝오버 수동으로 조작하기

[적용 예시](./13-6-popover-manual.html)

## 13.7 팝오버의 위치를 엘리먼트에 상대적인 위치로 설정하기

[적용 예시](./13-7-popover-relative.html)

* 유의할 점
  1. Why `position: absolute`?
    * 팝오버는 항상 특수한 최상위 레이어에 위치함
    * therefore `absolute`: 뷰포트 상대위치에 팝오버를 위치시킴
  2. `getBoundingClientRect()`로 버튼의 위치를 계산함 
  3. `window.scrollY`가 포함되어야 정상적인 위치가 될 것 (문서를 스크롤한 경우)
  4. 한계점
    * 해당 요소가 문서 하단에 있다면 가릴지도!
      * 공간이 충분한지 확인하고 위로 올리는 방법을 구현할 수 있음
    * 팝오버 표시 중간에 창 크기가 변한다면?
      * ResizeObserver, 또는 window resize 이벤트 청취로 해결할 수 있음

## 13.8 툴팁 표시

팝오버를 툴팁으로 사용하기

[적용 예시](./13-8-tooltip.html)


## 13.9 알림 표시

`Notification` 객체로 OS Native 알림 표시하기

알림(notification) v. 푸시 알림(push notification)

[MDN 문서](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)

[활용 예시](./13-9-notification.js)

