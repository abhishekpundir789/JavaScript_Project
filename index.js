// ---------------------------------------------- ///
// 1. Import menus
// ---------------------------------------------- //
import { appetizers } from './menus/appetizers.js'
import { maincourses } from './menus/maincourses.js'
import { desserts } from './menus/desserts.js'
import { beverages } from './menus/beverages.js'

// ---------------------------------------------- //
// 2. Import Utility functions
// ---------------------------------------------- //
import { renderTables, 
         renderSelect, 
         printSelection, 
         outputTotal, 
         renderReceipt } from './utilities/index.js'

// ---------------------------------------------- ///
// 3. Query document for all tables
// ---------------------------------------------- //
const appetizerTable = document.querySelector('#appetizers');
const maincourseTable = document.querySelector('#maincourses');
const dessertTable = document.querySelector('#desserts');
const beverageTable = document.querySelector('#beverages');

// ---------------------------------------------- //
// 4. Query document for all Select Boxes
// ---------------------------------------------- //
const appetizerSelect = document.querySelector('#appetizerSelect')
const maincourseSelect = document.querySelector('#maincourseSelect')
const dessertSelect = document.querySelector('#dessertSelect')
const beverageSelect = document.querySelector('#beverageSelect')

// ---------------------------------------------- //
// 5. Dynamically create and render table rows
// ---------------------------------------------- //

// Please see ./utilities for fn
renderTables(appetizers, appetizerTable);
renderTables(maincourses, maincourseTable);
renderTables(desserts, dessertTable);
renderTables(beverages, beverageTable);

// ---------------------------------------------- //
// 6. Dynamically create and render select options
// ---------------------------------------------- //

// Please see ./utilities for fn
renderSelect(appetizers, appetizerSelect);
renderSelect(maincourses, maincourseSelect);
renderSelect(desserts, dessertSelect);
renderSelect(beverages, beverageSelect);

// ---------------------------------------------- //
// 7. Compile order 
// ---------------------------------------------- //

// Initialize Empty Arrays, and variable
var orders = []
var orderPrices = []
var price;

// ----------------//
// 7.1 Query Output containers
// ----------------//

// Main outputs
const output = document.querySelector('#output');
const totalOutput = output.querySelector('#totalOutput')

// Menu selection Outputs
const appetizerOutput = output.querySelector('#appetizerOutput');
const maincourseOutput = output.querySelector('#maincourseOutput');
const dessertOutput = output.querySelector('#dessertOutput');
const beverageOutput = output.querySelector('#beverageOutput');

// Display orders on initial load
displayOrders();

const fullMenu = document.querySelector('#fullMenu');

fullMenu.addEventListener("input", function(){
  // reset orders and prices
  orders = []
  orderPrices = []
  price;
  // prints selections and total price
  displayOrders();
});

function displayOrders(){
  // Print selection for each menu - this will push the selected items into orders, and compile the prices into orderPrices array.
  // Please see utilities for fn
  printSelection(appetizers, appetizerSelect, appetizerOutput, orders, orderPrices);
  printSelection(maincourses, maincourseSelect, maincourseOutput, orders, orderPrices);
  printSelection(desserts, dessertSelect, dessertOutput, orders, orderPrices);
  printSelection(beverages, beverageSelect, beverageOutput, orders, orderPrices);

  // output price
  outputTotal(orderPrices, price, totalOutput)
}

// ---------------------------------------------- //
// 8. Clear order
// ---------------------------------------------- //

// Query the clear button
const Clear = document.querySelector('#cancel');

const receipt = document.querySelector('#receipt');

Clear.addEventListener("click", function(e){
  // prevent default form behaviour
  receipt.innerHTML = null;
  e.preventDefault();
  // reset select boxes
  const allSelects = fullMenu.querySelectorAll('select');
  allSelects.forEach( aSelect => {
    aSelect.value = 1;
  });
  // Reset Orders and Prices
  orders = []
  orderPrices = []
  price = 0;
  // Display orders, in our case it will be nothing.
  displayOrders();
});


// ---------------------------------------------- //
// 9. Checkout
// ---------------------------------------------- //

// Query Submit Buttons and Full Menu
const button = document.querySelector('#submit');

button.addEventListener("click", function(e){
  // Prevent default form behaviour
  e.preventDefault();

  // assign price to the total of selected items
  price = outputTotal(orderPrices, price)
  receipt.innerHTML = null;

  renderReceipt(price, receipt, orders)
});