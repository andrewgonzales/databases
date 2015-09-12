var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".



exports.allMessages = function(callback){
  var messages;
  console.log('In database method');
  dbConnection = mysql.createConnection({
        user: "root",
        password: "",
        database: "chat"
  });
  dbConnection.connect();
  dbConnection.query('SELECT * FROM Messages', function(err, rows){
    if (err) { throw err }
    messages = rows;
    callback(messages);
  });

  dbConnection.end();
};

exports.addUser = function(user){
  dbConnection = mysql.createConnection({
        user: "root",
        password: "",
        database: "chat"
  });
  dbConnection.connect();
  var userBody = JSON.parse(user).username;
  dbConnection.query('INSERT INTO Users values (\'' + userBody + '\', ' + null + ')', function(err, rows){
    if (err) { throw err }
    console.log('Added new user to database!');
  });
  dbConnection.end();
};

exports.addMessage = function(message){
  dbConnection = mysql.createConnection({
        user: "root",
        password: "",
        database: "chat"
  });
  dbConnection.connect();
  dbConnection.query('SELECT U_ID FROM Users WHERE username=\'' + JSON.parse(message)['username'] + '\'', function(err, U_ID){
    if (err) { throw err };
    /* If U_ID is null -> 'INSERT INTO Users message['username'] */
    dbConnection.query('SELECT R_ID FROM Rooms WHERE roomname=\'' + JSON.parse(message)['roomname'] + '\'', function(err, R_ID){
      /* If R_ID is null -> 'INSERT INTO Rooms message['roomname'] */
      if (err) { throw err };
      console.log(JSON.stringify(JSON.parse(message).message));
      var messageBody = JSON.stringify(JSON.parse(message).message);
      dbConnection.query('INSERT INTO Messages values (' + U_ID[0]['U_ID'] + ', \'' + messageBody + '\', ' + R_ID[0]['R_ID'] + ', ' + null + ')', function(err, rows){
        if (err) { throw err }
        console.log('Added new message to database, ', rows);
        dbConnection.end();
      });
    });
  });
};