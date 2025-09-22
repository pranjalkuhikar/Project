import mongoose from "mongoose";
import state from "../models/state.model.js";
import connectDB from "../db/db.js";

const seedData = [
  { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur"] },
  { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Rajkot"] },
];

async function insertData() {
  await connectDB();
  await state.deleteMany();
  await state.insertMany(seedData);
  console.log("Data inserted");
}

insertData();
