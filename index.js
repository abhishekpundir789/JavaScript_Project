// Select the appetizer table element
const appetizerTable = document.querySelector('#appetizer')
const appetizerSelect = document.querySelector('#appetizerSelect')

// initialize appetizer menu array of objects
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


// loop through the array of objects
for(i = 0; i < appetizers.length; i++){
  //FOREACH item in the array we will:

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


// loop through the array of objects
for(i = 0; i < appetizers.length; i++){
    //FOREACH item in the array we will:
  
    // create an option element 
    const option = document.createElement('option');
    // create the two columns that will go into the table row
    option.innerHTML = `${appetizers[i].name} ${appetizers[i].price}`
    option.setAttribute("value", appetizers[i].id);
  
    // then we select the table, and append the table row which now includes the two <td>'s
    appetizerSelect.appendChild(option);
}

/*const button = document.querySelector('#selectOrder');

button.addEventListener("click", function(){
    console.log(appetizerSelect.value)

    var selectedId = appetizerSelect.value;

    const result = appetizers.filter(appetizer => appetizer.id == selectedId );

    console.log(result[0].name);
});*/


// Select the mainCourse table element
const MaincourseTable = document.querySelector('#mainCourse')
const MaincourseSelect = document.querySelector('#mainCourseSelect')

//create array of objects for main course

const MainCourse=[
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

for(i=0; i<MainCourse.length; i++){

  
 const tr = document.createElement('tr');
 
 const colOne = document.createElement('td');
 const colTwo = document.createElement('td'); 

 colOne.innerHTML=`${MainCourse[i].id}. ${MainCourse[i].name}`
 colTwo.innerHTML=`$${MainCourse[i].price.toFixed(2)}`

 tr.appendChild(colOne);
 tr.appendChild(colTwo);

 MaincourseTable.appendChild(tr);
}

 for(i=0; i<MainCourse.length; i++){

  const option = document.createElement('option');
  
  option.innerHTML = `${MainCourse[i].name} ${MainCourse[i].price}`
  option.setAttribute("value", MainCourse[i].id);

  mainCourseSelect.appendChild(option); 
 }

 /*const button = document.querySelector('#selectOrder');

button.addEventListener("click", function(){
    console.log(mainCourseSelect.value)

    var selectedId = mainCourseSelect.value;

    const result = MainCourse.filter(mainCourse => mainCourse.id == selectedId );

    console.log(result[0].name);
});*/

 const Desserttable = document.querySelector('#dessert')
const Dessertselect = document.querySelector('#dessertSelect')

//create array of objects for main course

const dessertMenu=[
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

for(i=0; i<dessertMenu.length; i++){

  
 const tr = document.createElement('tr');
 
 const colOne = document.createElement('td');
 const colTwo = document.createElement('td'); 

 colOne.innerHTML=`${dessertMenu[i].id}. ${dessertMenu[i].name}`
 colTwo.innerHTML=`$${dessertMenu[i].price.toFixed(2)}`

 tr.appendChild(colOne);
 tr.appendChild(colTwo);

 Desserttable.appendChild(tr);
}

 for(i=0; i<dessertMenu.length; i++){

  const option = document.createElement('option');
  
  option.innerHTML = `${dessertMenu[i].name} ${dessertMenu[i].price}`
  option.setAttribute("value", dessertMenu[i].id);

  Dessertselect.appendChild(option); 
 }


 const Beveragetable = document.querySelector('#beverages')
const Beverageselect = document.querySelector('#beverageSelect')

//create array of objects for main course

const BeverageMenu=[
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

for(i=0; i<BeverageMenu.length; i++){

  
 const tr = document.createElement('tr');
 
 const colOne = document.createElement('td');
 const colTwo = document.createElement('td'); 

 colOne.innerHTML=`${BeverageMenu[i].id}. ${BeverageMenu[i].name}`
 colTwo.innerHTML=`$${BeverageMenu[i].price.toFixed(2)}`

 tr.appendChild(colOne);
 tr.appendChild(colTwo);

 Beveragetable.appendChild(tr);
}

 for(i=0; i<BeverageMenu.length; i++){

  const option = document.createElement('option');
  
  option.innerHTML = `${BeverageMenu[i].name} ${BeverageMenu[i].price}`
  option.setAttribute("value", BeverageMenu[i].id);

  Beverageselect.appendChild(option); 
 }

