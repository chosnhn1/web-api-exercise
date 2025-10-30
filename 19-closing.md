## 19.1 서드파티 라이브러리

* IndexedDB API: callback-base API
  * `Dexie.js`: IndexedDB의 Promise-based wrapped API

## 19.2 기능 지원 확인

* 주의: `user-agent`를 확인하지 말 것 ("UA sniffing")
  * "feature detection is better than browser detection"
  * [관련 문서](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)

```js
if ('indexedDB' in window) {
  // IndexedDB supported:
}
```

## 19.3 폴리필 (polyfill)

## 19.4 Upcoming APIs

* Web Bluetooth API
* Web NFC API
* EyeDropper API
* Barcode Detection API
* Cookie Store API
* Payment Request API
* ...