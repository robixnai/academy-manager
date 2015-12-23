'use strict';

var Student = require('../models/student-model')
  , ctrl = {};

ctrl.getAll = function(req, res) {
  var query = {};

  Student.find(query, function(err, data) {
    if(err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  });
};

ctrl.getById = function(req, res) {
  var query = { _id: req.params.id };

  Student.findOne(query, function(err, data) {
    if(err || !data || data == null) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
};

ctrl.insert = function(req, res) {
  var student = new Student(req.body);
  student.save(function(err, data) {
    if(err) {
      res.status(500).json(err);
    } else {
      res.status(201).json(data);
    }
  });
};

ctrl.update = function(req, res) {
  var query = { _id: req.params.id };
  var mod = req.body;

  delete mod._id;

  Student.update(query, mod, function(err, data) {
    if(err) {
      res.status(500).json(err);
    } else {
      res.json(data);
    }
  });
};

ctrl.remove = function(req, res) {
  var query = { _id: req.params.id };

  Student.remove(query, function(err, data) {
    if(err) {
      res.status(500).json(err);
    } else {
      res.sendStatus(200);
    }
  });
};

module.exports = ctrl;
