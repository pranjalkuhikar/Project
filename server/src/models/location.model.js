import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    state: { type: String, required: true, unique: true, trim: true },
    cities: { type: [String], required: true, default: [] },
  },
  { timestamps: true }
);

const Location = mongoose.model("Location", locationSchema);

export default Location;


