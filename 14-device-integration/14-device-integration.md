# 기기 통합

## 14. 1 배터리 상태 확인

[MDN 문서: Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)

[활용 예시](./14-1-battery.html)

## 14. 2 네트워크 상태 확인

[MDN 문서: Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)

```js
if (navigator.connection.effectiveType === '4g') {
  // This user can do network-heavy tasks
}

```

## 14. 3 기기 위치 확인

[MDN 문서: Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

## 14. 4 지도에 기기 위치 표시

구글 지도 API를 활용하는 예시: 

```js
const map = document.querySelector('#map');

navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;

  const iframe = document.createElement('iframe');
  iframe.width = 450;
  iframe.height = 250;

  const url = new URL('https://www.google.com/maps/embed/v1/place');
  url.searchParams.append('key', 'GOOGLE_MAPS_API_KEY');
  url.searchParams.append('q', `${latitude},${longitude}`);
  iframe.src = url;

  map.appendChild(iframe);
})
```

* [구글 지도](https://mapsplatform.google.com/lp/maps-apis/)
* [Mapbox](https://www.mapbox.com/)
* [OpenStreetMap](https://www.openstreetmap.org/)

## 14. 5 텍스트 복사하고 붙여넣기

[MDN 문서: Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

[활용 예시](./14-5-clipboard.html)

## 14. 6 웹 공유 API를 사용한 콘텐츠 공유

기기의 기본 공유 API를 사용한 링크 등 컨텐츠 공유

[MDN 문서: Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)

```js
if ('share' in navigator) {
  navigator.share({
    title: 'Awesome Site',
    text: 'Check these awesome things!',
    url: 'https://developer.mozilla.org',
  })
}
```

## 14. 7 기기 진동하기

[MDN 문서: Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)

```js
// 500ms 진동 1회
navigator.vibrate(500);

// 배열 전달 예시: 250ms 간격으로 500ms 진동 3회
navigator.vibrate([500, 250, 500, 250, 500]);

// 진동 취소
navigator.vibrate(0);
```

* 유의점: 동영상 자동 재생과 같은 이유로, 사용자와 해당 페이지가 최소한 한 번의 interaction이 있어야 동작

## 14. 8 화면 방향 확인

* `screen.orientation.type` 프로퍼티 (스마트폰 기준)
  * `portrait-primary`: 0도
  * `portrait-secondary`: 180도
  * `landscape-primary`: 90도 (스마트폰의 상단이 왼쪽에 옮)
  * `landscape-secondary`: 270도
  * 데스크탑 모니터, 노트북, 태블릿 등: 가로 방향이 기본인 경우 `landscape-primary`가 0도
* `screen.orientation`의 `change` 이벤트: 기기 방향 변경을 청취할 수 있음

[MDN 문서: Screen Orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API)
