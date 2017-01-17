'use strict';

const express = require('express');

let app = new express();

app.get('/', (req, res) => {
  res.render('./../app/index.html',{});
})
.listen(7777);