'use strict';
// catRoutes
const express = require('express');
const router = express.Router()
const multer = require('multer');
const {body} = require('express-validator');
const catController = require('../controllers/catController');

const fileFilter = (req, file, cb) => {
  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted
  const acceptedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (acceptedTypes.includes(file.mimetype)) {
    // To accept the file pass `true`, like so:
    cb(null, true);
  } else {
    // To reject this file pass `false`, like so:
    cb(null, false);
  }
};

const upload = multer({dest: 'uploads/', fileFilter});

router
  .get('/', catController.getCats)
  .get('/:catId', catController.getCat)
  .post(
    '/',
    upload.single('cat'),
    body('name').isLength({ min: 2 }).trim().escape(),
    body('birthdate').isDate(),
    body('weight').isFloat({ min: 0.1, max: 30 }),
    catController.createCat
  )
  .put(
    '/',
    body('name').isLength({ min: 2 }).trim().escape(),
    body('birthdate').isDate(),
    body('weight').isFloat({ min: 0.1, max: 30 }),
    catController.modifyCat
  )
  .put(
    '/:catId',
    body('name').isLength({ min: 2 }).trim().escape(),
    body('birthdate').isDate(),
    body('weight').isFloat({ min: 0.1, max: 30 }),
    catController.modifyCat
  )
  .delete('/:catId', catController.deleteCat);

module.exports = router;
