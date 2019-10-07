var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Mfatgg123!",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What catches your eye?",
      choices: [
        "ID: 1, Guitar: American Standard Stratocaster, Color: Black, Year: 2019, Price: 1000, Stock Level: 52",
        "ID: 2, Guitar: American Standard Telecaster, Color: Sunburst, Year: 2019, Price: 1100, Stock Level: 42",
        "ID: 3, Guitar: Vintage Telecaster, Color: Natural, Year: 1952, Price: 11100, Stock Level: 42",
        "Other"
      ]
    })
  //Select all customers and return the result object:
  connection.query("SELECT * FROM Fender", function (err, result, guitars) {
    if (err) throw err;
    console.log(result);
  });
};