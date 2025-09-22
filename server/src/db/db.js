import mongoose from "mongoose";
import config from "../configs/config.js";
import logger from "../utils/logger.js";

const connectDB = () =>
  mongoose
    .connect(config.MONGOURI)
    .then(() => logger.info("MongoDB connected"))
    .catch((err) => {
      logger.error(err);
      process.exit(1);
    });

export default connectDB;
