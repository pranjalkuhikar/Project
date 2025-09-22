import User from "../models/user.model.js";

export const createUser = (req, res) => {
  const { name, mobileNumber, state, city, address } = req.body;
  const user = new User({ name, mobileNumber, state, city, address });
  user.save();
  res.states(201).json({
    message: "User Created",
    user,
  });
};

export const getUser = (req, res) => {
  const users = User.find();
  res.status(200).json({
    users,
  });
};

export const updateUser = (req, res) => {
  const { id } = req.query.id;
  const { newData } = req.body;
  const user = User.findByIdAndUpdate(id, { newData });
  res.status(200).json({
    user,
  });
};
export const deleteUser = (req, res) => {
  const { id } = req.query.id;
  const user = User.findByIdAndDelete(id);
  res.status(200).json({
    user,
  });
};
