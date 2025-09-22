import express from "express";
import userRoute from "./user.routes.js";

const router = express.Router();

router.use("/v1", userRoute);

export default router;
