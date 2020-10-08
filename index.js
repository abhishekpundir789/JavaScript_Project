// ---------------------------------------------- //
// 1. Query document for all tables
// ---------------------------------------------- //
const appetizerTable = document.querySelector('#appetizer');
const MaincourseTable = document.querySelector('#mainCourse');
const Desserttable = document.querySelector('#dessert');
const Beveragetable = document.querySelector('#beverages');

// ---------------------------------------------- //
// 2. Query document for all Select Boxes
// ---------------------------------------------- //
const appetizerSelect = document.querySelector('#appetizerSelect')
const MaincourseSelect = document.querySelector('#mainCourseSelect')
const Dessertselect = document.querySelector('#dessertSelect')
const Beverageselect = document.querySelector('#beverageSelect')

// ---------------------------------------------- //
// 3. Initialize array of menu items
// ---------------------------------------------- //

// ----------------//
// 3.1 Appetizers
// ----------------//
const appetizers = [
  {
    id: 1,
    name: "No Selection",
    price: 0 
  },
  {
    id: 2,
    name: "Texas Cheese Fries",
    price: 6.87 
  },
  {
    id: 3,
    name: "Loaded Nachos Fries",
    price: 4.25
  },
  {
    id: 4,
    name: "French Fries Board",
    price: 8.80 
  },
  {
    id: 5,
    name: "Lunchion Fries",
    price: 4.50 
  },
  {
    id:6,
    name: "Lobster Fries",
    price: 12.36
  }
]

// ----------------//
// 3.2 Main Courses
// ----------------//
const mainCourses = [
  {
    id: 1,
    name: "No Selection",
    price: 0 
  },
  {
    id: 2,
    name: "Crispy Fish & Chips",
    price: 9.99 
  },
  {
    id: 3,
    name: "Texas Chilli Fries",
    price: 8.89
  },
  {
    id: 4,
    name: "Waffle Fry Nachos",
    price: 10.50
  },
  {
    id: 5,
    name: "Steak And Fries Salad",
    price: 10.99
  },
  {
    id:6,
    name: "Short Rib Poutine",
    price: 12.99
  } 
]

// ----------------//
// 3.3 Deserts
// ----------------//
const dessertMenu = [
  {
    id: 1,
    name: "No Selection",
    price: 0 
  },
  {
    id: 2,
    name: "Green Tea Cake",
    price: 9.99 
  },
  {
    id: 3,
    name: "Oreo choco Cake",
    price: 8.89
  },
  {
    id: 4,
    name: "Vegan Chocolotae Cake",
    price: 10.50
  },
  {
    id: 5,
    name: "Matcha Cake",
    price: 10.99
  },
  {
    id:6,
    name: "Mango Coconut Souffle",
    price: 12.99
  } 
]

// ----------------//
// 3.4 Beverages
// ----------------//
const BeverageMenu = [
  {
    id: 1,
    name: "No Selection",
    price: 0 
  },
  {
    id: 2,
    name: "Diet Coke",
    price: 1.25
  },
  {
    id: 3,
    name: "Orange Crush",
    price: 1.50
  },
  {
    id: 4,
    name: "Strawberry Crafted Beer",
    price: 3.99
  },
  {
    id: 5,
    name: "Canned Sprite Pop",
    price: 1.99
  },
  {
    id:6,
    name: "Mango Shake",
    price: 3.45
  } 
]


// ---------------------------------------------- //
// 4. Dynamically create table rows
// ---------------------------------------------- //

// ----------------//
// 4.1 Appetizers
// ----------------//
for(i = 0; i < appetizers.length; i++){
  // create a table row element 
  const tr = document.createElement('tr');
  // create the two columns that will go into the table row
  const colOne = document.createElement('td');
  const colTwo = document.createElement('td');
  // Edit the left column's inner html to include the item's id and it's name
  colOne.innerHTML = `${appetizers[i].id}. ${appetizers[i].name}`
  // Edit the right column's innter html to include the item's price. Also round the price to (2) decimal points
  colTwo.innerHTML = `$${appetizers[i].price.toFixed(2)}`
  // Now we use appendChild() to append the newly edited columns into the table row element we created earlier
  tr.appendChild(colOne);
  tr.appendChild(colTwo);
  // then we select the table, and append the table row which now includes the two <td>'s
  appetizerTable.appendChild(tr);
}


// ----------------//
// 4.2 Maincourses
// ----------------//

for(i = 0; i < mainCourses.length; i++){
  // create a table row element 
  const tr = document.createElement('tr');
  // create the two columns that will go into the table row
  const colOne = document.createElement('td');
  const colTwo = document.createElement('td'); 
  // Edit the left column's inner html to include the item's id and it's name
  colOne.innerHTML=`${mainCourses[i].id}. ${mainCourses[i].name}`
  // Edit the right column's innter html to include the item's price. Also round the price to (2) decimal points
  colTwo.innerHTML=`$${mainCourses[i].price.toFixed(2)}`
   // Now we use appendChild() to append the newly edited columns into the table row element we created earlier
  tr.appendChild(colOne);
  tr.appendChild(colTwo);
   // then we select the table, and append the table row which now includes the two <td>'s
  MaincourseTable.appendChild(tr);
}


// ----------------//
// 4.3 Deserts
// ----------------//

for(i = 0; i < dessertMenu.length; i++){
  // create a table row element 
  const tr = document.createElement('tr');
  // create the two columns that will go into the table row
  const colOne = document.createElement('td');
  const colTwo = document.createElement('td'); 
  // Edit the left column's inner html to include the item's id and it's name
  colOne.innerHTML=`${dessertMenu[i].id}. ${dessertMenu[i].name}`
  // Edit the right column's innter html to include the item's price. Also round the price to (2) decimal points
  colTwo.innerHTML=`$${dessertMenu[i].price.toFixed(2)}`
  // Now we use appendChild() to append the newly edited columns into the table row element we created earlier
  tr.appendChild(colOne);
  tr.appendChild(colTwo);
  // then we select the table, and append the table row which now includes the two <td>'s
  Desserttable.appendChild(tr);
}


// ----------------//
// 4.4 Beverages
// ----------------//

for(i = 0; i < BeverageMenu.length; i++){
  // create a table row element 
  const tr = document.createElement('tr');
  // create the two columns that will go into the table row
  const colOne = document.createElement('td');
  const colTwo = document.createElement('td'); 
  // Edit the left column's inner html to include the item's id and it's name
  colOne.innerHTML=`${BeverageMenu[i].id}. $${BeverageMenu[i].name}`
  // Edit the right column's innter html to include the item's price. Also round the price to (2) decimal points
  colTwo.innerHTML=`$${BeverageMenu[i].price.toFixed(2)}`
  // Now we use appendChild() to append the newly edited columns into the table row element we created earlier
  tr.appendChild(colOne);
  tr.appendChild(colTwo);
  // then we select the table, and append the table row which now includes the two <td>'s
  Beveragetable.appendChild(tr);
}



// ---------------------------------------------- //
// 5. Dynamically select options
// ---------------------------------------------- //

// ----------------//
// 5.1 Appetizers
// ----------------//

for(i = 0; i < appetizers.length; i++){
  // create an option element 
  const option = document.createElement('option');
  // edit the inner HTML to include the price and name of item
  option.innerHTML = `${appetizers[i].name}  $${appetizers[i].price}`
  // add attribute of value and assign the item's ID
  option.setAttribute("value", appetizers[i].id);
  // then we select the table, and append the table row which now includes the two <td>'s
  appetizerSelect.appendChild(option);
}


// ----------------//
// 5.2 Maincourses
// ----------------//

for(i = 0; i < mainCourses.length; i++){
  // create an option element 
  const option = document.createElement('option');
  // edit the inner HTML to include the price and name of item
  option.innerHTML = `${mainCourses[i].name} $${mainCourses[i].price}`
  // add attribute of value and assign the item's ID
  option.setAttribute("value", mainCourses[i].id);
  // then we select the table, and append the table row which now includes the two <td>'s
  mainCourseSelect.appendChild(option); 
}

// ----------------//
// 5.3 Desserts
// ----------------//

for(i = 0; i < dessertMenu.length; i++) {
  // create an option element 
  const option = document.createElement('option');
  // edit the inner HTML to include the price and name of item
  option.innerHTML = `${dessertMenu[i].name} $${dessertMenu[i].price}`
  // add attribute of value and assign the item's ID
  option.setAttribute("value", dessertMenu[i].id);
  // then we select the table, and append the table row which now includes the two <td>'s
  Dessertselect.appendChild(option); 
}

// ----------------//
// 5.4 Beverages
// ----------------//

for(i = 0; i < BeverageMenu.length; i++){
  // create an option element 
  const option = document.createElement('option');
  // edit the inner HTML to include the price and name of item
  option.innerHTML = `${BeverageMenu[i].name} $${BeverageMenu[i].price}`
  // add attribute of value and assign the item's ID
  option.setAttribute("value", BeverageMenu[i].id);
  // then we select the table, and append the table row which now includes the two <td>'s
  Beverageselect.appendChild(option); 
}

// ---------------------------------------------- //
// 6. Compile order 
// ---------------------------------------------- //

// Initialize Empty Array
const menuArray = []

// query submit button
const button = document.querySelector('#submit');

button.addEventListener("click", function(e){
  // prevent form default
  e.preventDefault();

  // ----------------//
  // 6.1 Appetizers
  // ----------------//

  // Pull value of appetizer select
  var appetizerSelectedId = appetizerSelect.value;
  // Find the selected appetizer in appetizer menu
  const appetizerResult = appetizers.filter(appetizer => appetizer.id == appetizerSelectedId );
  // push selected appetizer to menuArray
  menuArray.push(appetizerResult[0].name);
    
  // ----------------//
  // 6.2 Maincourses
  // ----------------//

  // Pull value of maincourse select
  var MaincourseSelectedId = MaincourseSelect.value;
  // Find the selected appetizer in appetizer menu
  const MaincourseResult = mainCourses.filter(Maincourse => Maincourse.id == MaincourseSelectedId );
  // push selected appetizer to menuArray
  menuArray.push(MaincourseResult[0].name);

  
  // ----------------//
  // 6.3 Deserts
  // ----------------//

  // Pull value of dessert select
  var DessertSelectedId = Dessertselect.value;
  // Find the selected appetizer in appetizer menu
  const DessertResult = dessertMenu.filter(DesertMenu => DesertMenu.id == DessertSelectedId );
  // push selected appetizer to menuArray
  menuArray.push(DessertResult[0].name);

    
  // ----------------//
  // 6.4 Beverages
  // ----------------//

  // Pull value of beverage select
  var beverageSelectedId = Beverageselect.value;
  // Find the selected appetizer in appetizer menu
  const beverageResult = BeverageMenu.filter(beverageMenu => beverageMenu.id == beverageSelectedId );
  // push selected appetizer to menuArray
  menuArray.push(beverageResult[0].name);

  // ----------------//
  // 6.5 Compile
  // ----------------//

    var price;

    price = beverageResult[0].price + 
            DessertResult[0].price + 
            MaincourseResult[0].price + 
            appetizerResult[0].price;

    console.log(`total Bill:$ ${price}`)
    console.log(menuArray);
});

// ---------------------------------------------- //
// 6. Clear order
// ---------------------------------------------- //

// Query the clear button
const Clear = document.querySelector('#cancel');


Clear.addEventListener("click", function(e){
  // prevent default form behaviour
  e.preventDefault();
  // reset select boxes
  Beverageselect.value=1;
  Dessertselect.value=1;
  MaincourseSelect.value=1;
  appetizerSelect.value=1;
  //reset menuArray and price
  const menuArray=[]
  console.log(menuArray);
});