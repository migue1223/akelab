'use strict';

const express = require('express');
const router = express.Router();

//import controller
const filmsControllers = require('../controllers/filmsController');

module.exports = function () {
  //auth
  router.get('/films', filmsControllers.getFilms);

  return router;
};
