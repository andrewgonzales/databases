var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.Messages.findAll({include: [db.User]})
        .then(function(message){
          res.json(message);
        });
    },
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        .then(function(user){
          db.Room.findOrCreate({where: {roomname: req.body.roomname}})
            .then(function(room){
              db.Message.create({
                userid: user.id,
                text: req.body.message,
                roomid: room.id
              }).then(function(message){
                res.sendStatus(201);
              });
            });
        });
    }

  },

  users: {
    get: function (req, res) {
      db.Users.findAll()
        .then(function(user){
          res.json(user);
        });
    },

    post: function (req, res) {
      db.User.create({
        username: req.body.username
      }).then(function(user){
          res.sendStatus(201);
      });
    }
  }

};

