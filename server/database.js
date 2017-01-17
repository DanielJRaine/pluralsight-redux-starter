'use strict';

let mongoose = require('mongoose');
let Report = require('./models/Report.js');

mongoose.connect('mongodb://localhost/test', () => {
  console.log("connected");

  mongoose.connection.db.dropDatabase();

  reports.forEach((report) => {
    new Report(report).save();
  });
});
