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
      
      models.messages.post(req.body);
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
      models.users.post(req.body);
      res.writeHead(201);
      res.end('Post successful');

    }
  }
};

