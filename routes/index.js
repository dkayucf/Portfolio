const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const indexController = require('../controller/indexController');

//get index route
router.get('/', indexController.getIndexRoute);

//Contact form submission
router.post('/', indexController.contactSubmit);

module.exports = router;