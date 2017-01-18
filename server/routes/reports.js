'use strict';

module.exports = function (app) {

  let Report = require('./../models/Report.js');

  app.route('/api/reports')
  .get((req, res) => {
    Report.find((error, doc) => {
      res.send(doc);
    })
  });
}