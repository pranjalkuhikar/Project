import express from "express";
import cors from "cors";
import morgan from "morgan";
import indexRoute from "./routes/index.routes.js";
import { resolve, join } from "path";

const app = express();

app.use(express.static(join(resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", indexRoute);

app.get("*wild", (req, res) => {
  res.sendFile(join(resolve(), "public", "index.html"), (err) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    }
  });
});

export default app;
