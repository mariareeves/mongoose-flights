// Routes/flights/js

var express = require('express');
var router = express.Router();

// Re quire the controller that exports flights CRUD funcitions
const flightsCtrl = require('../controller/flights');

// ALL actual paths begin with '/flights
// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// POST /flights
router.post('/', flightsCtrl.create);

module.exports = router;
