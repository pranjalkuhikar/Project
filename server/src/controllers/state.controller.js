import state from "../models/state.model.js";

export const getStates = async (req, res) => {
  const states = await state.find({}, "name");
  res.json(states);
};

export const getCities = async (req, res) => {
  const state = await state.findOne({ name: req.params.stateName });
  res.json(state ? state.cities : []);
};
