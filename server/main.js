'use strict';

const express = require('express');

let app = new express();
let parser = require('body-parser');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('./../src/index.html',{});
})
.listen(7000);

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

require('./routes/reports.js');