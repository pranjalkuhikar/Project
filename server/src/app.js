import express from "express";
import cors from "cors";
import morgan from "morgan";
import indexRoute from "./routes/index.routes.js";

const app = express();

app.use(express.urlencoded({ extends: true }));
app.use(express.json());
app.use(cors("*"));
app.use(morgan("dev"));

app.use("/api", indexRoute);

export default app;
