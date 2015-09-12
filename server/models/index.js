var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.allMessages(function(messages){
        console.log('In model. Rows: ', messages);
        callback(messages);
      });
      // return rows.map(function(message) {
      //   return message.message;
      // })
    }, // a function which produces all the messages
    post: function (message) {
      console.log('In model messages post: ', message);
      db.addMessage(message);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user) {
      console.log('In model users post: ', user);
      db.addUser(user);
    }
  }
};

