DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(3) NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Marshall JC100", "amps", 800.99, 22),
("Fender Twin Reverb", "amps" ,2000.99, 5),
("Danelectro '59 Modified New Old Stock (NOS)", "instruments", 350.99, 25),
("Fender American Standard Stratocaster", "instruments", 1000.99, 52),
("Fender American Standard Telecaster", "instruments", 1100.99, 42),
("Fender Vintage Telecaster", "instruments", 11100.99, 2),
("Gibson Les Paul Custom", "instruments", 1999.99, 22),
("Gibson SG", "instruments", 2100.99, 15),
("Gibson Melody Maker", "instruments", 500.99,50),
("Fender Jaguar", "instruments", 800.99, 18),
("ErnieBall", "strings", 6.99, 200),
("ClearTone Elixer", "strings", 11.99, 100),
("Hohner Blues Harp", "instruments", 12.99, 200),
("Fender Mandolin", "instruments", 350.99, 200);