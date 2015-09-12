var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      res.writeHead(200);
      models.messages.get(function(messages) {
        console.log("In controller:", messages);
      });
      res.end('Get from database');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var data;
      req.on('data', function(reqData){
        data = reqData;
      });
      req.on('end', function(){
        console.log('In controller messages post:', data.toString());
        models.messages.post(data.toString());
      });
      res.writeHead(201);
      res.end('Post successful');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.writeHead(200);
      res.end();
    },
    post: function (req, res) {
      var data;
      req.on('data', function(reqData){
        data = reqData;
      });
      req.on('end', function(){
        console.log('In controller users post:', data.toString());
        models.users.post(data.toString());
      });
      res.writeHead(201);
      res.end('Post successful');

    }
  }
};

