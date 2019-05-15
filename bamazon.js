const mysql = require('mysql');
const inquirer =require('inquirer')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Password',
    database: 'bamazon'
});


connection.connect(function(err) {
    if (err) throw err;
    runSearch();
  });
  
  function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "Welcome to Bamazon! How may we be of service today?",
        choices: [
          "View Products for sale",
          "View Low Inventory",
          "Add to Inventory",
          "Add New Product",
          "exit"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View Products for sale":
          ProductView();
          break;
  
        case "View Low Inventory":
          LowProductView();
          break;
  
        case "Add to Inventory":
          AddInventory();
          break;
  
        case "Add New Product":
          AddProduct();
          break;
            
        case "exit":
          connection.end();
          break;
        }
      })
    }