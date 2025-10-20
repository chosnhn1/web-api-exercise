const events = new EventSource('https://example.com/events');

events.addEventListener('open', () => {
  console.log('Connection opened');
});

events.addEventListener('error', event => {
  console.log('error: ', event);
})


// 이벤트 타입에 따라 처리하자
// eg. 'heartbeat'와 'notice'
events.addEventListener('heartbeat', event => {
  console.log('receive heartbeat: ', event.data);
})

events.addEventListener('notice', event => {
  console.log('receive notice: ', event.data);
})

function cleanup() {
  events.close();
}

