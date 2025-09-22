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

export const updateUser = (req, res) => {};
export const deleteUser = (req, res) => {};
