import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

app.use(express.json());

const router = express.Router();

const sayHello = async (request, response) => {
  try {
    response.status(200).json({
      message: "Hello!",
    })
  } catch (error) {
    response.status(400).json({
      message: "Fetch failed."
    })
  }
}

const appRouter = router.get("/", sayHello)
app.use("api/v1", appRouter);

app.listen(PORT, () => {
  console.log("app started.")
})