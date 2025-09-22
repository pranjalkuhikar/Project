import Location from "../models/location.model.js";

export const listStates = async (req, res) => {
  try {
    const docs = await Location.find({}, { state: 1 }).sort({ state: 1 });
    res.json({ states: docs.map((d) => d.state) });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch states", error: error.message });
  }
};

export const listCitiesByState = async (req, res) => {
  try {
    const { state } = req.params;
    const doc = await Location.findOne({ state });
    if (!doc) return res.status(404).json({ message: "State not found" });
    res.json({ cities: doc.cities });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch cities", error: error.message });
  }
};

export const seedLocations = async (req, res) => {
  try {
    const payload = req.body?.locations || [];
    if (!Array.isArray(payload) || payload.length === 0) {
      return res
        .status(400)
        .json({ message: "Provide locations: [{state, cities:[]}...]" });
    }
    await Location.deleteMany({});
    await Location.insertMany(payload);
    res.json({ message: "Seeded", count: payload.length });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to seed locations", error: error.message });
  }
};
