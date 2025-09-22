import express from "express";
import stateRoute from "./state.routes.js";

const router = express.Router();

router.use("/v1", stateRoute);

export default router;
