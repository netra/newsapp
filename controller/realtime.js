/**
 * Controller for Cart App
 * 
 */
var model = require('../model/realtime');

var CartController = {

  execute: function(callback) {
    return model.getData(function(data){
      return callback(data);
    });
  }
  
};

module.exports = CartController;
