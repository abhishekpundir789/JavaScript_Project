// Select the appetizer table element
const appetizerTable = document.querySelector('#appetizer')

// initialize appetizer menu array of objects
const appetizers = [
  {
    id: 1,
    name: "No Selection",
    price: 0 
  },
  {
    id: 2,
    name: "Texas Cheese FriesDeep Fried Calamari",
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
for(var index in appetizers) {
  document.write( index + " : " + appetizers[index] + "<br />");
}


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