'use strict';

var express = require('express')
  , ctrl = require('../controllers/student-controller')
  , router = express.Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.insert);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
