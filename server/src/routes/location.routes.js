import express from "express";
import {
  listStates,
  listCitiesByState,
  seedLocations,
} from "../controllers/location.controller.js";

const router = express.Router();

router.get("/locations/states", listStates);
router.get("/locations/:state/cities", listCitiesByState);
router.post("/locations/seed", seedLocations);

export default router;
