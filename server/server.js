import express from "express";
import path from "path";
import { WebSocketServer } from "ws";

const app = express();
const PORT = 8000;
const __dirname = path.resolve();
const wss = new WebSocketServer({ port: 8080 });

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Server available.");
});


// Chapter 4

app.get("/api/users", (request, response) => {
  response.status(200).send({
    'username': 'John'
  })
})

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
});

wss.on('connection', (ws) => {
  ws.on('error', console.error);

  ws.on('message', (data) => {
    console.log(`WebSocket received: ${data}`)
  });

  ws.send('something');
});

