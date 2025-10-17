import express from "express";
import path from "path";

const app = express();
const PORT = 8000;
const __dirname = path.resolve();

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