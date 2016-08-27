DROP DATABASE IF EXISTS dbName;

CREATE DATABASE dbName;

USE dbName;

-- Never Forget Semi-colons
-- Please include a diagram to the schema in the schema folder

CREATE TABLE tableName(
	id INT NOT NULL AUTO_INCREMENT,
	generic INT,
	PRIMARY KEY (id)
);

INSERT INTO tableName
(generic)
VALUES
(genericValue);