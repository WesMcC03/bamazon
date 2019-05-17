const mysql = require('mysql');
const inquirer = require('inquirer')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Password',
    database: 'bamazon'
});


connection.connect(function(err) {
    if (err) throw err;
    start();
  });
  

  function start() {
    var query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products";
    connection.query(query, function(err, res) {
        // if (err) throw err;
        for (var i=0; i < res.length; i++) {
            console.log("item_id: " +res[i].item_id+"\nproduct_name :" +res[i].product_name+"\ndepartment_name: "
        +res[i].department_name+"\nprice: " +res[i].price+ "\nstock_quantity: "+res[i].stock_quantity+"\n-----------------------\n"
        )};
        inquirer.prompt({
            name: "product_id",
            type: "input",
            message: "What is the product ID number of the item yoou wish to purchase??" ,
            }).then(function(answer){
                var query = "SELECT item_id FROM products";
                connection.query(query, {product_id:answer.product_id}, function(err,res){
            });
        })
    })
};
            
          
   
   
   
            //     name: "quantity",
        //     type: "input",
        //     message: "How many would you like to purchase?"
        //   }
        // ])

 

    // start();

    
    
    
    
    
    
    
    
    
    
    
    
        inquirer
        .prompt([
          {
            name: "choice",
            type: "rawlist",
            choices: function() {
              var productArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_id);
              }
              return productArray;
            },
            message: "What is the product ID number of the item yoou wish to purchase??"
          },
          {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?"
          }
        ])
        .then(function(answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
            "INSERT INTO auctions SET ?",
            {
                item_name: answer.item,
                category: answer.category,
                starting_bid: answer.startingBid || 0,
                highest_bid: answer.startingBid || 0
            },
            function(err) {
                if (err) throw err;
                console.log("Your auction was created successfully!");
                // re-prompt the user for if they want to bid or post
                start();
            }
            );
        
    });
