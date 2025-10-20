// WebSocket schema should be "ws" or "wss"
const url = "wss://example.com/";
const socket = new WebSocket(url);

socket.addEventListener('open', onSocketOpened);
socket.addEventListener('message', handleMessage);
socket.addEventListener('error', handleError);
socket.addEventListener('close', onSocketClosed);

function onSocketOpened() {
  console.log('Socket ready');
}

function handleMessage(event) {
  console.log('Received message: ', event.data);
}

function handleMessage(event) {
  console.log('Socket error: ', event);
}

function onSocketClosed() {
  console.log('Connection closed');
}
