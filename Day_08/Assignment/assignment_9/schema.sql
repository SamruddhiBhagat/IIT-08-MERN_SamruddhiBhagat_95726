-- Create a MySQL database named
express_db;

-- use database
use express_db;

-- create table
create table if not exists users(
id int primary key auto_increment,
first_name varchar(50),
last_name varchar(50),
email varchar(50),
phone varchar(15)
);