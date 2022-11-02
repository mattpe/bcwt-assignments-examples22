'use strict';
// catRoutes
const express = require('express');
const router = express.Router()
const catController = require('../controllers/catController');

router.get('/', catController.getCats);
router.get('/:catId', (req, res) => {
  //console.log(req.params);
  res.send('From this endpoint you can get cat with id ' + req.params.catId);
});
router.post('/', (req, res) => {
  res.send('From this endpoint you can add more cats.');
});
router.put('/', (req, res) => {
  res.send('From this endpoint you can edit cats.');
});
router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete cats.');
});

module.exports = router;
