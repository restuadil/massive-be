import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import vetRouter from "./routers/veterinarians.Route.js";
import userRouter from "./routers/user.Route.js";
import reviewRouter from "./routers/review.Route.js";
const app = express();

app.use(cors());
dotenv.config();
app.use(bodyParser.json());
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", vetRouter);
app.use("/api", userRouter);
app.use("/api", reviewRouter);
