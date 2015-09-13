var mysql = require('mysql');
var Sequelize = require('sequelize');
var orm = new Sequelize('chat', 'root', '');
 
var User = orm.define('User', {
  username: Sequelize.STRING
});

var Message = orm.define('Message', {
  text: Sequelize.STRING
});

var Room = orm.define('Room', {
  roomname: Sequelize.STRING
});

Message.hasMany(User);
Message.hasMany(Room);

User.hasMany(Message);
Room.hasMany(Message);

User.sync({force: true});
Room.sync({force: true});
Message.sync({force: true});

exports.User = User;
exports.Room = Room;
exports.Message = Message;


// exports.allMessages = function(callback){
//   var messages;
//   dbConnection.connect();
//   dbConnection.query('SELECT * FROM Messages', function(err, rows){
//     if (err) { throw err }
//     messages = rows;
//     callback(messages);
//   });

//   dbConnection.end();
// };

// exports.addUser = function(user){
//   console.log('In database addUser: ', user.username);
//   dbConnection = mysql.createConnection({
//         user: "root",
//         password: "",
//         database: "chat"
//   });
//   dbConnection.connect();
//   var userBody = user.username;
//   dbConnection.query('INSERT INTO Users values (\'' + userBody + '\', ' + null + ')', function(err, rows){
//     if (err) { throw err }
//     console.log('Added new user to database!');
//   });
//   dbConnection.end();
// };


// exports.addMessage = function(message){
//   console.log('In database addMessage: ', message);
//   dbConnection = mysql.createConnection({
//         user: "root",
//         password: "",
//         database: "chat"
//   });

//   var getR_ID = function(R_ID, callback){
//     dbConnection.query('SELECT R_ID FROM Rooms WHERE roomname=\'' + message.roomname + '\'', function(err, R_ID){
//       if (err) { throw err };
//       if (R_ID.length !== 0) {
//         callback(R_ID);
//       } else {
//         dbConnection.query('INSERT INTO Rooms values (' + '\'' + message.roomname + '\' ,' + null + ')', function(err, result){
//           getR_ID(callback);  
//         });
//       }
//     });
//   };

//   var getU_ID = function(callback){
//     dbConnection.query('SELECT U_ID FROM Users WHERE username=\'' + message.username + '\'', function(err, U_ID){
//       if (err) { throw err };
//       if (U_ID.length !== 0) {
//         callback(U_ID);
//       } else {
//         dbConnection.query('INSERT INTO Users values (' + '\'' + message.username + '\' ,' + null + ')', function(err, result){
//           getU_ID(callback);  
//         });
//       }
//     });
//   };

//   var insertMessage = function(U_ID, R_ID, passedMessage){
//     console.log('Message Body in insertMessage :', passedMessage.message);
//     var messageBody = passedMessage.message;
//     dbConnection.query('INSERT INTO Messages values (' + U_ID[0]['U_ID'] + ', \'' + messageBody + '\', ' + R_ID[0]['R_ID'] + ', ' + null + ')', function(err, rows){
//       if (err) { throw err }
//       console.log('Added new passedMessage to database, ', rows);

//       dbConnection.end();
//     });
//   };

//   dbConnection.connect();

//   /* Chain callbacks to post new message */
//   getU_ID(function(U_ID) {
//     console.log('U_ID from getU_ID:', U_ID);
//     getR_ID(U_ID, function(R_ID){
//       console.log('R_ID from getR_ID:',R_ID);
//       console.log('Message to pass to insertMessage', message);
//       insertMessage(U_ID, R_ID, message);
//     });
//   });

// };
