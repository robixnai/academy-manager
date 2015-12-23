'use strict';

var mongoose = require('mongoose')
  , patterns = require('../util/patterns')
  , schema = new mongoose.Schema({
      name: { type: String, required: true, trim: true }
      // lastName: { type: String, required: true, trim: true },
      // birth: { type: Date, required: true },
      // sex: { type: String, required: true, enum: ["M","F"] },
      // email: { type: String, required: true, trim: true, match: patterns.email },
      // phone: { type: String, trim: true, default: '', match: patterns.phone },
      // cell: { type: String, trim: true, default: '', match: patterns.phone }
    });

module.exports = mongoose.model('Student', schema);
