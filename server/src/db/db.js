import mongoose from "mongoose";

const stateSchema = new mongoose.Schema({
  state: { type: String, required: true },
  cities: { type: [String], required: true },
});

const state = new mongoose.model("state", stateSchema);

export default state;
