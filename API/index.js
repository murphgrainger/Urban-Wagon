const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const queries = require("../db/queries");

router.post('/game', function(req, res, next) {
  console.log(req.body);
  // queries.postNewGame(req.body)
  //   .then((all) => {
  //     console.log('hi', all);
  //     res.json('Server Notice: Game Successfully Posted!');
  //   });
})


router.post('/jobs/newjob', function(req, res) {

});

module.exports = router;
