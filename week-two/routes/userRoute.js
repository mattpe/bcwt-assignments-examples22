'use strict';
const express = require('express');
const router = express.Router()

// TODO:
// - Create user routes
// - Create user controller
// - use the data available in userModel.js

const userController = require('../controllers/userController');

router.get('/', userController.getUsers);

router.get('/:userId', userController.getUser);

router.post('/', (req, res) => {
  res.send('From this endpoint you can add more users.');
});
router.put('/', (req, res) => {
  res.send('From this endpoint you can edit users.');
});
router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete users.');
});

module.exports = router
