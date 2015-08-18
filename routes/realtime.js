var express = require('express');
var router = express.Router();
var controller = require('../controller/realtime')

/* GET home page. */
router.get('/', function(req, res, next) {
  controller.execute(function(data){
    console.log(" Controller Data" , data);
    data = data.responseData.feed;
    res.render('realtime', data);
  });
  
});

module.exports = router;
