'use strict';

var express = require('express');
var controller = require('./contacts.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.put('/', controller.update);
router.post('/', controller.create);
router.delete('/:id', controller.destroy);

module.exports = router;