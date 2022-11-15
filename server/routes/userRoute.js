'use strict';
const express = require('express');
const router = express.Router()
const {body, validationResult} = require('express-validator');

const userController = require('../controllers/userController');

router.get('/', userController.getUsers)
  .get('/:userId', userController.getUser)
  .post('/',
    body('name').isLength({min: 3}), 
    userController.createUser)
  .put('/', (req, res) => {
    // TODO: replace with controller & data model
    res.send('From this endpoint you can edit users.');
  })
  .delete('/', (req, res) => {
    // TODO: replace with controller & data model 
    res.send('From this endpoint you can delete users.');
  });

module.exports = router
