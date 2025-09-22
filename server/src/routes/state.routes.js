import express from "express";
import { getStates, getCities } from "../controllers/state.controller.js";

const router = express.Router();

router.get("/states", getStates);
router.get("/states/:stateName/cities", getCities);

export default router;
