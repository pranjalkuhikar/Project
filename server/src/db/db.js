import mongoose from "mongoose";
import config from "../configs/config.js";

const connectDB = () =>
  mongoose
    .connect(config.MONGOURI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });

export default connectDB;
