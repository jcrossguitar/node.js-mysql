DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE Fender (
  id INT NOT NULL,
  guitars VARCHAR(100) NULL,
  color VARCHAR(100) NULL,
  year INT NOT NULL,
  price DECIMAL(6) NOT NULL,
  stockLevel INT(3) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Gibson (
  id INT NOT NULL,
  guitars VARCHAR(100) NULL,
  color VARCHAR(100) NULL,
  year INT(4) NOT NULL,
  price DECIMAL(6) NOT NULL,
  stockLevel INT(3) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Accessories (
  id INT NOT NULL,
  item VARCHAR(100) NULL,
  brand VARCHAR(100) NOT NULL,
  price DECIMAL(6) NOT NULL,
  stockLevel INT(3) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Ampliphiers (
  id INT NOT NULL,
  guitarAmps VARCHAR(100) NULL,
  watts INT(4),
  color VARCHAR(100) NULL,
  year INT(4) NOT NULL,
  price DECIMAL(6) NOT NULL,
  weight DECIMAL(2,2) NOT NULL,
  stockLevel INT(3) NULL,
  PRIMARY KEY (id)
);

SELECT * FROM Fener;
select * from Gibson;
select * from Accessories;
select * from Ampliphiers;
