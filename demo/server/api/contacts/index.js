'use strict';

var express = require('express');
var controller = require('./contacts.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.put('/', controller.update);

module.exports = router;