import mongoose from "mongoose";
import State from "./models/State.js";

const seedData = [
  { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur"] },
  { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Rajkot"] },
];

async function insertData() {
  await State.deleteMany();
  await State.insertMany(seedData);
  console.log("Data inserted");
  mongoose.disconnect();
}

insertData();
