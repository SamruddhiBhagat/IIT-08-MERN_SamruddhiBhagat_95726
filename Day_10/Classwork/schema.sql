create database internship_db;

 use internship_db;

CREATE TABLE IF NOT EXISTS users (
id int primary key auto_increment,
name varchar (50),
email varchar (50),
password varchar (8),
mobile varchar (15)
);