var https = require('https');

/**
 * Cart Model which is going to pull data from MongoDB
 * 
 */
var CartModel = {

   getData: function(callback) {

      return https.get({
          host: 'ajax.googleapis.com',
          path: '/ajax/services/feed/load?v=1.0&q=http://rss.nytimes.com/services/xml/rss/nyt/Business.xml'
      }, function(response) {
          // Continuously update stream with data
          var body = '';
          response.on('data', function(d) {
              body += d;
          });
          response.on('end', function() {  
              // Data reception is done, do whatever with it!
              var parsed = JSON.parse(body);
              return callback(parsed);
          });
      });
  
  },
  setData: function() {
    
  }
};

module.exports = CartModel;
