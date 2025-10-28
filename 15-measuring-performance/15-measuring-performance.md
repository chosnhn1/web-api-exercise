# 성능 측정

[관련 문서](https://developer.mozilla.org/en-US/docs/Web/Performance)

* Navigation Timing API: 페이지 초기 로딩 시간
* Resource Timing API: 리소스 다운로드, 동기/비동기 네트워크 요청 생성 시간
* User Timing API: 임의 동작의 경과 시간
* Performance Entry & `PerformanceObserver`
* `DOMHighResTimeStamp`

## 15.1 페이지 로딩 성능 측정

```js
const [navigation] = window.performance.getEntriesByType('navigation');
```

* 첫번째 바이트까지의 시간(`startTime` -> `responseStart`)
* DOM 인터랙션까지의 시간(`startTime` -> `domInteractive`)
* 전체 로딩 시간(`startTime` -> `loadEventEnd`)



## 15.2 리소스 성능 측정

```js
const entries = window.performance.getEntriesByType('resource');
```

## 15.3 가장 느린 리소스 탐지

```js
// get 15.2, sort by delta response time, slice 5 slowest
const slowestResources = window.performance.getEntriesByType('resource')
.sort((a, b) => (b.responseEnd - b.startTime) - (a.responseEnd - a.startTime))
.slice(0 ,5)

```

eg. 가장 빠른 리소스 탐지

```js
const fastestResources = window.performance.getEntriesByType('resource')
.sort((a, b) => (a.responseEnd - a.startTime) - (b.responseEnd - b.startTime))
.slice(0 ,5)

```

## 15.4 특정 리소스의 타이밍 확인

```js
// "/api/users"로 향하는 모든 요청 찾기
const entries = window.performance.getEntriesByName('https://localhost/api/users', 'resource');
```

## 15.5 렌더링 성능 프로파일링

eg. `DataView`라는 이름의 컴포넌트를 렌더링한다면...

```js
// 성능측정지점 생성
window.performance.mark('render-start');

// 렌더링
const dataView = new DataView();
dataView.render(data);

// 종료하는 시점의 성능측정지점 생성
window.performance.mark('render-end');

// 차이 측정
const measure = window.performance.measure('render', 'render-start', 'render-end')
```

```js
// 만일 렌더링 데이터를 전달하고 싶다면...
const measure = window.performance.measure('render', {
  start: 'render-start',
  end: 'render-end',
  detail: data,
})
// 나중에 detail 프로퍼티에서 조회할 수 있다

```

나중에 결과 찾아보기

```js
const [renderMeasure] = window.performance.getEntriesByName('render');
```

## 15.6 다단계 작업 프로파일링

eg. 여러 데이터가 오고가는 예시: transactions >> process >> upload

```js
async function handleTransaction() {
  window.performance.mark('transactions-start'); // !
  const transactions = await fetch('/api/users/123/transactions');
  window.performance.mark('transactions-end'); // !

  window.performance.mark('process-start'); // !
  const analytics = processAnalytics(transactions);
  window.performance.mark('process-end'); // !

  window.performance.mark('upload-start'); // !
  await fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify(analytics),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  window.performance.mark('upload-end'); // !
}
```

측정 결과 계산

```js
console.log('Transaction data download: ', 
  window.performance.measure(
    'transactions', 'transactions-start', 'transactions-end'
  ).duration
);

console.log('Analytics processing: ', 
  window.performance.measure(
    'analytics', 'analytics-start', 'analytics-end'
  ).duration
);

console.log('Upload analytics: ', 
  window.performance.measure(
    'upload', 'upload-start', 'upload-end'
  ).duration
);

console.log('Total time elapsed: ', 
  window.performance.measure(
    'total', 'transaction-start', 'upload-end'
  ).duration
);
```

## 15.7 성능 측정 항목 감시

```js
// 성능 측정 엔드포인트:
const analyticsEndpoint = 'https://example.com/api/analytics';

const observer = new PerformanceObserver(entries => {
  for (let entry of entries.getEntries()) {
    // fetch 엔트리만, Beacon API로 빠르게 보내는 예시
    if (entry.initiatorType === 'fetch') {
      navigator.sendBeacon(analyticsEndpoint, entry);
    }
  }
});

observer.observe({ type: 'resource' });
```

주의: 무한 루프 방지 (`PerformanceObserver`는 요청마다 이벤트 발생: 즉 분석 요청에 반응해 분석 요청을 하지 않도록)


eg. 버퍼에 성능 엔트리를 모아서 전송하는 예시

```js
const analyticsEndpoint = 'https://example.com/api/analytics';
const BUFFER_SIZE = 10;
let buffer = [];

const observer = new PerformanceObserver(entries => {
  for (let entry of entries.getEntries()) {
    if (entry.initiatorType === 'fetch' && entry.name !== analyticsEndpoint) {
      buffer.push(entry);
    }

    // buffer full: send
    if (buffer.length === BUFFER_SIZE) {
      fetch(analyticsEndpoint, {
        method: 'POST',
        body: JSON.stringify(buffer),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // clear buffer
      buffer = [];
    }
  }
});

observer.observe({ type: 'resource' });
```