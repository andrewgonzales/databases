CREATE DATABASE chat;

USE chat;

CREATE TABLE Users (
  /* Describe your table here.*/
  username varchar(15),
  U_ID int AUTO_INCREMENT,

  UNIQUE (username),
  UNIQUE (U_ID),
  PRIMARY KEY (U_ID)
)ENGINE=InnoDB;

CREATE TABLE Rooms (
  roomname varchar(10),
  R_ID int AUTO_INCREMENT,

  UNIQUE (roomname),
  UNIQUE (R_ID),
  PRIMARY KEY (R_ID)

)ENGINE=InnoDB;

CREATE TABLE Messages (
  /* Describe your table here.*/
  U_ID int NOT NULL,
  /* Get user from Users table ID */
  messages varchar(140),
  R_ID int NOT NULL,
  M_ID int AUTO_INCREMENT,
  
  PRIMARY KEY(M_ID),
  FOREIGN KEY (U_ID) REFERENCES Users (U_ID),
  FOREIGN KEY (R_ID) REFERENCES Rooms (R_ID)

  /* Get room from Rooms table ID */
)ENGINE=InnoDB;


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

