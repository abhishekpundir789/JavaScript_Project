// ---------------------------------------------- ///
// 1. Import menus
// ---------------------------------------------- //
import { appetizers } from './menus/appetizers.js'
import { maincourses } from './menus/maincourses.js'
import { desserts } from './menus/desserts.js'
import { beverages } from './menus/beverages.js'
// ---------------------------------------------- ///
// 2. Query document for all tables
// ---------------------------------------------- //
const appetizerTable = document.querySelector('#appetizer');
const maincourseTable = document.querySelector('#mainCourse');
const dessertTable = document.querySelector('#dessert');
const beverageTable = document.querySelector('#beverages');

// ---------------------------------------------- //
// 3. Query document for all Select Boxes
// ---------------------------------------------- //
const appetizerSelect = document.querySelector('#appetizerSelect')
const maincourseSelect = document.querySelector('#mainCourseSelect')
const dessertSelect = document.querySelector('#dessertSelect')
const beverageSelect = document.querySelector('#beverageSelect')


// ---------------------------------------------- //
// 4. Dynamically create table rows
// ---------------------------------------------- //

// ----------------//
// 4.1 Appetizers
// ----------------//
renderTables(appetizers, appetizerTable);

// ----------------//
// 4.2 maincourses
// ----------------//
renderTables(maincourses, maincourseTable);

// ----------------//
// 4.3 Deserts
// ----------------//
renderTables(desserts, dessertTable);

// ----------------//
// 4.4 Beverages
// ----------------//
renderTables(beverages, beverageTable);

// Renders table rows
function renderTables(array, table) {
  array.forEach( a => {
    // create a table row element 
    const tr = document.createElement('tr');
    // create the two columns that will go into the table row
    const colOne = document.createElement('td');
    const colTwo = document.createElement('td');
    // Edit the left column's inner html to include the item's id and it's name
    colOne.innerHTML = `${a.id}. ${a.name}`
    // Edit the right column's innter html to include the item's price. Also round the price to (2) decimal points
    colTwo.innerHTML = `$${a.price.toFixed(2)}`
    // Now we use appendChild() to append the newly edited columns into the table row element we created earlier
    tr.appendChild(colOne);
    tr.appendChild(colTwo);
    // then we select the table, and append the table row which now includes the two <td>'s
    table.appendChild(tr);
  });
}

// ---------------------------------------------- //
// 5. Dynamically select options
// ---------------------------------------------- //

// ----------------//
// 5.1 Appetizers
// ----------------//
renderSelect(appetizers, appetizerSelect);

// ----------------//
// 5.2 maincourses
// ----------------//
renderSelect(maincourses, maincourseSelect);

// ----------------//
// 5.3 Desserts
// ----------------//
renderSelect(desserts, dessertSelect);

// ----------------//
// 5.4 Beverages
// ----------------//
renderSelect(beverages, beverageSelect);

// Renders select options
function renderSelect(array, select){
  array.forEach( a => {
    // create an option element 
    const option = document.createElement('option');
    // edit the inner HTML to include the price and name of item
    option.innerHTML = `${a.name}  $${a.price}`
    // add attribute of value and assign the item's ID
    option.setAttribute("value", a.id);
    // then we select the table, and append the table row which now includes the two <td>'s
    select.appendChild(option);
  });
}

// ---------------------------------------------- //
// 6. Compile order 
// ---------------------------------------------- //


// ----------------//
// 6.1 Query Output containers
// ----------------//

const output = document.querySelector('#output');

const appetizerOutput = output.querySelector('#appetizerOutput');
const maincourseOutput = output.querySelector('#maincourseOutput');
const dessertOutput = output.querySelector('#dessertOutput');
const beverageOutput = output.querySelector('#beverageOutput');
const totalOutput = output.querySelector('#totalOutput')

// Initialize Empty Array
var orders = []
var orderPrices = []
var price;

// Query Submit Buttons and Full Menu
const button = document.querySelector('#submit');
const fullMenu = document.querySelector('#fullMenu');

fullMenu.addEventListener("input", function(){
  orders = []
  orderPrices = []
  price;
  displayOrders();
})

button.addEventListener("click", function(e){
  // prevent form default
  e.preventDefault();
  orders = []
  orderPrices = []
  price;
  displayOrders();
});

function displayOrders(){
  // ----------------//
  // 6.2 Appetizers
  // ----------------//
  printSelection(appetizers, appetizerSelect, appetizerOutput);
  // ----------------//
  // 6.3 maincourses
  // ----------------//
  printSelection(maincourses, maincourseSelect, maincourseOutput);
  // ----------------//
  // 6.4 Deserts
  // ----------------//
  printSelection(desserts, dessertSelect, dessertOutput);
  // ----------------//
  // 6.5 Beverages
  // ----------------//
  printSelection(beverages, beverageSelect, beverageOutput);
  // ----------------//
  // Compile Prices
  // ----------------//
  outputTotal(orderPrices)
}

function outputTotal(array){
  price = array.reduce((a, b) => a + b, 0);
  totalOutput.innerHTML = `${price.toFixed(2)}`;
}


function printSelection(array, select, output){
  // Pull value of beverage select
  var selectedId = select.value;
  // Find the selected appetizer in appetizer menu
  const result = array.filter(a => a.id == selectedId );
  output.innerHTML = `${result[0].name} $${result[0].price.toFixed(2)}`;
  // Push orders to respective array
  orders.push(result[0].name)
  orderPrices.push(result[0].price);
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


