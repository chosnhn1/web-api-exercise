# 파일 다루기

과거 웹 앱의 파일 처리: 서버로 업로드 후 처리 / 브라우저로 전송

* 파일 입력 필드
* 확장자, MIME Type 처리
* File API
* File System API: 파일 입력 필드 없이 직접 JavaScript가 로컬 파일시스템과 상호작용

## 10.1. 파일에서 텍스트 읽기

`FileReader` 객체와 `readAsText` 메서드

이벤트 기반 API, 만일 Promise로 사용하고 싶다면 Promise로 감싸기

* [예제](./10-1-read-text.html)
* [Promise 적용 예제](./10-1-read-text-promise.js)

## 10.2 이미지를 Data URL로 읽기

[예제](./10-2-image.html)

* [Data URL](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data)
* [MDN 용어집: Base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64)

## 10.3 동영상을 객체 URL로 읽기

* 참고: Data URL vs. Object URL

[예제](./10-3-video.html)

## 10.4 드래그 앤 드롭을 통한 이미지 읽기

[예제](./10-4-drag-and-drop.html)

* 참고: Assistive Technology로서 추가되는 input

## 10.5 권한 확인하고 요청하기

[예제](./10-5-permission.js)

## 10.6 API 데이터를 파일로 내보내기

[예제](./10-6-export-api.html)

## 10.7 API 데이터를 다운로드 링크로 내보내기

[예제](./10-7-export-api-to-link.html)

## 10.8 드래그 앤 드롭으로 파일 업로드하기

[예제](./10-8-upload-from-drag-and-drop.js)