const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const queries = require("../db/queries");

router.get("/test", function(request, response, next) {
  console.log('GET ROUTE');
  // res.json(req.body)
});

module.exports = router;
