var mysql = require("mysql");
var i = require('inquirer');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dimadimadima',
  password : 'localpancakes',
  database : 'bamazon_DB'
});

connection.connect(); 

const getChoice = (type) => {
  const choices = {
    'View Products for Sale': viewProducts,
    'View Low Inventory': viewLowInventory,
    'Add to Inventory': addToInventory,
    'Add New Product': addNewProduct
  }
  return choices[type]();
}

i.prompt([
  {
    name: 'choice',
    message: 'What would you like to do today?',
    type: 'list',
    choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product']
  }
]).then(a => {
  getChoice(a.choice); 
  connection.end();
})

const viewProducts = () => {
  console.log('hi');
  connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;
    products = results.map(x => `Id:${x.item_id} | ${x.product_name} | $${x.price} | stock:${x.stock_quantity}`);
    console.log(products);
  });
}

const viewLowInventory = () => {
  connection.query('SELECT * FROM products WHERE stock_quantity < 2000', function (error, results, fields) {
    if (error) throw error;
    products = results.map(x => `Id:${x.item_id} | ${x.product_name} | $${x.price} | stock:${x.stock_quantity}`);
    console.log(products);
  });
}

const addToInventory = (id, quantity) => {
  connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;

  });
}

const addNewProduct = (id, quantity) => {
  connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;

  });
}
