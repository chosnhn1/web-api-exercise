# 웹 스피치 API

## 9.1. 텍스트 필드에 받아쓰기 추가하기

* [MDN Web Speech API 문서](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
* [인터페이스 문서](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
* [예제](9-1-dictation.js)

연속 모드 (`continuous` 플래그): 한번 인식 후 인식을 중단하지 않고 계속 청취

## 9.2. Promise 기반 음성 인식 도우미 작성하기

## 9.3. 사용할 수 있는 목소리 확인하기

## 9.4. 음성 합성

`SpeechSynthesisUtterance` 객체를 `speechSynthesis.speak`에 전달하기

* 주의: 음성 합성은 언제나 브라우저가 "사용자가 해당 페이지와 상호작용함"을 확인한 후에만 허가됨


## 9.5. 음성 합성 커스터마이징

* 속도와 높낮이: `utterance` 객체의 속성을 통해 조절
  * `pitch`: 높낮이
    * 0 ~ 2 사이의 float
  * `rate`: 속도 (배수)
    * 0.1 ~ 10
* 실제 브라우저는 명세보다 적은 범위를 지원

```js
const utteranceLow = new SpeechSynthesisUtterance('낮은 톤으로 천천히 읽습니다');
utteranceLow.pitch = 0.1;
utteranceLow.rate = 0.5;
speechSynthesis.speak(utteranceLow);

const utteranceHigh = new SpeechSynthesisUtterance('높은 톤으로 빠르게 읽습니다');
utteranceHigh.pitch = 2;
utteranceHigh.rate = 2;
speechSynthesis.speak(utteranceHigh);
```

## 9.6. 음성 합성 자동으로 중단하기

예: 다른 탭으로 이동 / 문서를 떠났을 때 현재의 음성 출력을 중지하기

참고: 일반적으로는 다른 탭으로 전환해도 텍스트를 계속 읽음 (기본적으로 예상되는 동작임)

```js
document.addEventlistener('visibilitychange', () => {
  if (speechSynthesis.speaking) {
    if (document.visibilityState === 'hidden') {
      speechSynthesis.pause();
    } else if (document.visibilityState === 'visible') {
      speechSynthesis.resume();
    }
  }
});
```