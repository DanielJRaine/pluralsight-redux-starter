'use strict';

const mongoose = require('mongoose');
const Report = require('./models/Report.js');
const https = require('https');

let reports = [];

var jsonUrl = 'https://s3.amazonaws.com/verizoniot/vzthingspace/staging/v2/2017-01-05/thingspacereport.json';
https.get(jsonUrl, (res) => {
  const statusCode = res.statusCode;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error(`Request Failed.\n` +
                      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error(`Invalid content-type.\n` +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.log(error.message);
    // consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => rawData += chunk);
  res.on('end', () => {
      let parsedData = JSON.parse(rawData);
      reports = [parsedData];
  });
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
  });

mongoose.connect('mongodb://localhost/test', () => {
  console.log("connected");

  mongoose.connection.db.dropDatabase();

  reports.forEach((report) => {
    new Report(report).save();
  });
});
