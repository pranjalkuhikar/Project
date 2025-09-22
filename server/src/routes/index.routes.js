import express from "express";
import userRoute from "./user.routes.js";
import locationRoute from "./location.routes.js";

const router = express.Router();

router.use("/v1", userRoute);
router.use("/v1", locationRoute);

export default router;
