'use strict';

var express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , app = express()
  , api = {
      student: require('./routes/student-route')
    }
  , db = require('./conf/db');


app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/student', api.student);

module.exports = app;
