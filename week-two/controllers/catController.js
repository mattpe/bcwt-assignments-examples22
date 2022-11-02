'use strict';
const catModel =  require('../models/catModel');

const cats = catModel.cats;

const getCats = (req, res) => {
  res.json(cats);
};

const getCat = (req, res) => {
  // choose only one object with matching id
  const cat = cats.filter(cat => req.params.catId == cat.id)[0];
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

const modifyCat = (req, res) => {};
const createCat = (req, res) => {};
const deleteCat = (req, res) => {};

module.exports = {
  getCat,
  getCats,
  modifyCat,
  createCat,
  deleteCat
};