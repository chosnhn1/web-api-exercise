# 네트워크 요청

Web 2.0 & AJAX

XMLHttpRequest(XHR) >> Axios, jQuery >> Fetch (2015)

* XHR (이벤트 기반)
* Fetch API (Promise 기반)
* Beacon: 분석 데이터 전송을 위한 단방향 POST 요청
* Server-sent event: 서버와의 단방향 지속 연결 (실시간 이벤트)
* WebSocket: 양방향 지속 연결 (eg. 화상회의 등)

## XMLHttpRequest 사용하기

[사용 예시](./4-1-xhr-req.js)

이벤트 기반 서버 요청 API: `open()`하고 `send()`하자

`load` 이벤트, `error` 이벤트가 발생한다

그런데 굳이 사용해야 할까 (Fetch API도 10년이 넘어가고 있다)

유의: 아직 Fetch가 못하는 XHR 기능들 (eg. 전송 중단 / 업로드 상태추적)

`AbortController` `progress`

## Fetch API: GET

## Fetch API: POST

## Fetch API: Upload

## Beacon 전송

응답을 기다리지 않고 POST 전송하기 (eg. 분석 자료 등)

[사용 예시](./4-5-beacon.js)

* 유의사항:
  * 불안정성: `beforeunload`, `unload`에서 `visibilitychange`로

`navigator.sendBeacon()`은 boolean을 반환한다: 전송 동작이 예약되어 있는지?

`navigator.sendBeacon()`은 POST 요청만 전송한다: 다양한 분석 자료가 필요하다면, 배열로 묶어 POST의 본문으로 활용하자

## SSE로 원격 이벤트 리스닝하기

EventSource API로 Server-sent Event 수신하기

[사용 예시](./4-6-sse.js)

주의: SSE는 HTTP/2와 사용하도록 강력 권장된다

[MDN EventSource 문서](https://developer.mozilla.org/en-US/docs/Web/API/EventSource)

