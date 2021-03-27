'use strict';

const movies = require('../Movies.json');
const response = require('../network/response');

exports.getFilms = async (req, res) => {
  try {
    if (!req.query.Akelab) {
      return response.error(req, res, 'Not found', 404);
    }
    if (req.query.Akelab !== '123456789') {
      return response.error(
        req,
        res,
        'Unauthorized contact administrator',
        401
      );
    }
    const getData = await movies;
    response.success(req, res, getData, 200);
  } catch (err) {
    console.error('ctr-films-getFilms', err);
    return response.error(req, res, err.message, 500);
  }
};
