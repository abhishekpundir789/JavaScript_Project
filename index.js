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
import { renderTables, renderSelect, printSelection, outputTotal } from './utilities/index.js'

// ---------------------------------------------- ///
// 3. Query document for all tables
// ---------------------------------------------- //
const appetizerTable = document.querySelector('#appetizer');
const maincourseTable = document.querySelector('#maincourse');
const dessertTable = document.querySelector('#dessert');
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
// 6. Dynamically render select options
// ---------------------------------------------- //

// Please see ./utilities for fn
renderSelect(appetizers, appetizerSelect);
renderSelect(maincourses, maincourseSelect);
renderSelect(desserts, dessertSelect);
renderSelect(beverages, beverageSelect);


// ---------------------------------------------- //
// 7. Compile order 
// ---------------------------------------------- //

// Initialize Empty Array
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


// Query Submit Buttons and Full Menu
const button = document.querySelector('#submit');
const fullMenu = document.querySelector('#fullMenu');

fullMenu.addEventListener("input", function(){
  orders = []
  orderPrices = []
  price;
  displayOrders();
});

button.addEventListener("click", function(e){
  // prevent form default
  e.preventDefault();
  orders = []
  orderPrices = []
  price;
  displayOrders();
});

function displayOrders(){
  // Print selection for each menu
  printSelection(appetizers, appetizerSelect, appetizerOutput, orders, orderPrices);
  printSelection(maincourses, maincourseSelect, maincourseOutput, orders, orderPrices);
  printSelection(desserts, dessertSelect, dessertOutput, orders, orderPrices);
  printSelection(beverages, beverageSelect, beverageOutput, orders, orderPrices);

  // output price
  outputTotal(orderPrices, price)
}

// ---------------------------------------------- //
// 7. Clear order
// ---------------------------------------------- //

// Query the clear button
const Clear = document.querySelector('#cancel');


Clear.addEventListener("click", function(e){
  // prevent default form behaviour
  e.preventDefault();
  // reset select boxes
  beverageSelect.value = 1;
  dessertSelect.value = 1;
  maincourseSelect.value = 1;
  appetizerSelect.value = 1;
  // reset output
  appetizerOutput.innerHTML = null 
  maincourseOutput.innerHTML = null 
  dessertOutput.innerHTML = null 
  beverageOutput.innerHTML = null 
  totalOutput.innerHTML = null 
  //reset menuArray and price
  orders = []
  orderPrices = []

  outputTotal(orderPrices);
});


