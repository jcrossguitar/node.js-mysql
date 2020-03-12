var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");
require("dotenv");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "PASSWORD",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) return err;
  loadItems();
});

function loadItems() {
  // Selects all of the data from the MySQL products table
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    // Display table in the terminal
    console.table(res);

    // Then prompt the customer for products to be purchased
    productsPrompt(res);
  });
}

// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// }
  //Select all items and return the result object:
  // connection.query("SELECT * FROM products", function (err, result, item_id) {
  //   if (err) return err;
  //   console.log(result);
  // });
  // Prompt the customer for a product ID
function productsPrompt(itemsInStock) {
  // prompt with instructions
  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "What is the ID of the item you would you like to purchase? [Quit with quit]",
        validate: function(val) {
          return !isNaN(val) || val.toLowerCase() === "quit";
        }
      }
    ])
    .then(function(val) {
      // Check if the user wants to quit the program
      exitListener(val.choice);
      var userPick = parseInt(val.choice);
      var product = availableStock(userPick, itemsInStock);

      // If there is a product with the id the user chose, prompt the customer for a desired quantity
      if (product) {
        // Pass the chosen product to numberOfItems
        numberOfItems(product);
      }
      else {
        // Else not available
        console.log("\nThat item is not available at the moment.");
        loadItems();
      }
    });
}

// Prompt the customer for a product quantity
function numberOfItems(product) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "quantity",
        message: "How many would you like? [Quit with quit]",
        validate: function(val) {
          return val > 0 || val.toLowerCase() === "quit";
        }
      }
    ])
    .then(function(val) {
      // Check if the user wants to quit the program
      exitListener(val.quantity);
      var quantity = parseInt(val.quantity);

      // If there isn't enough of the chosen product and quantity, let the user know and re-run loadItems
      if (quantity > product.stock_quantity) {
        console.log("\nNot enough stock! Try again later!");
        loadItems();
      }
      else {
        // Otherwise run makePurchase, give it the product information and desired quantity to purchase
        makePurchase(product, quantity);
      }
    });
}

// Purchase the desired quantity of the desired item
function makePurchase(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, product.item_id],
    function(err, res) {
      // Let the user know the purchase was successful, re-run loadItems
      console.log("\nSuccessfully purchased " + quantity + " " + product.product_name + "'s! " + product.price + " each!");
      loadItems();
    }
  );
}

// Check to see if the product the user chose exists in the itemsInStock
function availableStock(userPick, itemsInStock) {
  for (var i = 0; i < itemsInStock.length; i++) {
    if (itemsInStock[i].item_id === userPick) {
      // If a matching product is found, return the product
      return itemsInStock[i];
    }
  }
  // Otherwise return null
  return null;
}

// Check to see if the user wants to quit the program
function exitListener(choice) {
  if (choice.toLowerCase() === "quit") {
    // Log a message and exit the current node process
    console.log("Thank you for your time!");
    process.exit(0);
  }
}
