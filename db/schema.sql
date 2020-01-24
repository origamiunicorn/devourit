DROP DATABASE IF EXISTS pie_db;

CREATE DATABASE pie_db;
USE pie_db;

CREATE TABLE pies
(
    id INT NOT NULL
    AUTO_INCREMENT,
    pieName VARCHAR
    (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
);