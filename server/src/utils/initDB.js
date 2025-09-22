import connectDB from "../db/db.js";
import State from "../models/state.model.js";

await connectDB();

async function insertData() {
  await State.deleteMany();
  await State.insertMany([
    { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur"] },
    { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Rajkot"] },
  ]);
  console.log("Data Inserted ✅");
  process.exit();
}

insertData();
