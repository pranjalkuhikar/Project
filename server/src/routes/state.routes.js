import express from "express";
import { stateController } from "../controllers/state.controller.js";

const router = express.Router();

router.post("/form", stateController);

export default router;
