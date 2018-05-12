var mysql = require("mysql");
var i = require('inquirer');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dimadimadima',
  password : 'localpancakes',
  database : 'bamazon_DB'
});

connection.connect(); 

const choices = {
  'View Products for Sale': viewProducts(),
  'View Low Inventory': viewLowInventory(),
  'Add to Inventory': addToInventory(),
  'Add New Product': addNewProduct()
}

i.prompt([
  {
    name: 'choice',
    message: 'What would you like to do today?',
    type: 'list',
    choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product']
  }
]).then(a => {
  choices[a.choice];  
  connection.end();
})

const viewProducts = (id, quantity) => {
  connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;

  });
}

const viewLowInventory = (id, quantity) => {
  connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;

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
