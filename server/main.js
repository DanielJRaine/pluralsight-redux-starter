'use strict';

const express = require('express');

let app = new express();

app.get('/', (req, res) => {
  res.render('./../src/index.html',{});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777);

require('./routes/reports.js');