import express from "express";
import stateController from "../controllers/state.controller.js";

const router = express.Router();

app.post("/form", stateController);

export default router;
