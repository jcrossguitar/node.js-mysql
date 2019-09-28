DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100), NOT NULL,
    price INT NOT NULL, 
    stock_quantity INT NOT NULL
);