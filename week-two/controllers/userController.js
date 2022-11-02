'use strict';
const userModel =  require('../models/userModel');

const users = userModel.users;

const getUsers = (req, res) => {
  res.json(users);
};

const getUser = (req, res) => {
  // choose only one object with matching id
  const user = users.filter(user => req.params.userId == user.id)[0];
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const modifyUser = (req, res) => {};
const createUser = (req, res) => {};
const deleteUser = (req, res) => {};

module.exports = {
  getUser,
  getUsers,
  modifyUser,
  createUser,
  deleteUser
};