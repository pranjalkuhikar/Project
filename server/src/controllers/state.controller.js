import state from "../models/state.model.js";

export const getStates = async (req, res) => {
  const states = await state.find({}, "name");
  res.json(states);
};
