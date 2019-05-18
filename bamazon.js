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
            message: "What is the product ID number of the item you wish to purchase??" ,
            }).then(function(answer){
                var productid = res[i].item_id;
                if (answer.product_id === productid) {
                    quantitycheck()
                 } else {
                    console.log("did not work")
                    }
                })

            });
        };
            
          
        // function quantitycheck() {
        //     inquirer.prompt({
        //         name: "quantity",
        //         type: "input",
        //         message: "How many of this item would you like to purchase?" ,
        //         // }).then(function(answer){
        //         //     if (answer.product_id === res[i]) {
        //         //         quantitycheck()
        //         //      } else {return false}
        //         //     })
    
        //         })};
            










                // var query = "SELECT item_id FROM products";
                // connection.query(query, {product_id:answer.product_id}, function(err,res){
                //     for (var i=0; i<res.length; i++) {
                //         console.log("item_id: " +res[i].item_id+"\nproduct_name :" +res[i].product_name+"\ndepartment_name: "
                //         +res[i].department_name+"\nprice: " +res[i].price+ "\nstock_quantity: "+res[i].stock_quantity)
                //     }

   
   
            //     name: "quantity",
        //     type: "input",
        //     message: "How many would you like to purchase?"
        //   }
        // ])

 

    // start();

    
    
    
    
    
    
    
