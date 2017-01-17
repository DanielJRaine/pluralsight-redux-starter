'use strict';

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

require('./database.js'); 

var url = 'mongodb://127.0.0.1:27017/test';

let app = new express();
let parser = require('body-parser');

router.get('/', function(req, res, next){
  let resultArray = [];
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let cursor = db.collection("test").find();
    cursor.forEach((doc, err) => {
      cursor.equal(null, err);
      resultArray.push(doc);
    }, () => {
      db.close();
      res.render('./../src/index.html',{});
    });
  });
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('./../src/index.html',{});
})
.listen(7000);

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

require('./routes/reports.js');