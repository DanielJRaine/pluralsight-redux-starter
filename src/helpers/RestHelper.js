'use strict';

let $ = require('jquery');

module.exports = {
  get: (url) => {
    return new Promise((success, error) => {
      $.ajax({
        url: url,
        dataType: "json",
        success: success,
        error: error
      })
    })
  }
}