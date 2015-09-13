CREATE DATABASE chat;

USE chat;

CREATE TABLE Messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  /* Get user from Users table ID */
  text varchar(140) NOT NULL,
  userid int NOT NULL,
  roomid int NOT NULL,
  
  PRIMARY KEY(id)

)

CREATE TABLE Users (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  username varchar(15) NOT NULL,

  PRIMARY KEY (id)
)

CREATE TABLE Rooms (
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar(10) NOT NULL,

  PRIMARY KEY (id)
)
