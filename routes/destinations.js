const express = require('express');
const router = express.Router();

//Require the yet to be created reviews controller
const destinationsCtrl = require('../controller/destinations')


//Define the Route
router.post('/flights/:id/destinations', destinationsCtrl.create)


module.exports = router;