var mysql = require("mysql");
var i = require('inquirer');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dimadimadima',
  password : 'localpancakes',
  database : 'bamazon_DB'
});

connection.connect(); 

connection.query('SELECT * FROM products LIMIT 10', function (error, results, fields) {
  if (error) throw error;
  console.log(results.map(x => `${x.item_id} | ${x.product_name} | ${x.price}`));
});

const validateN = (n) => !isNaN(parseInt(n)) && n < 100000;

i.prompt([
  {
    name: 'id',
    message: 'What is the id of the item you want to buy?',
    type: 'input',
    validate: validateN
  },
  {
    name: 'quantity',
    message: 'How many of them would you like to buy?',
    type: 'input',
    validate: validateN
  }
]).then(a => {
  checkInventory(a.id, a.quantity);
})

const checkInventory = (id, quantity) => {
  connection.query('SELECT * FROM products WHERE item_id = ?', [id], function (error, results, fields) {
    if (error) throw error;
    if(results[0].stock_quantity > quantity){
      completeSale(id, quantity);
      console.log(`You owe $${results[0].price * quantity}
      db is updated, ${results[0].product_name} has ${results[0].stock_quantity - quantity} quantity left.`);

    } else {
      console.log('Insufficient Quantity!');
    }
    connection.end();
  });
}

const completeSale = (id, quantity) => {
  connection.query('UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?', [quantity, id] ,function (error, results, fields) {
    if (error) throw error;
  });
}

//connection.end();