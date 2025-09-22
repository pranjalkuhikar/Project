import express from "express";
import formRoute from "./state.routes.js";

const router = express.Router();

router.use("/v1", formRoute);

export default router;
