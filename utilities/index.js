// Renders tables
const renderTables = (array, table) => {
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

// Renders select options
const renderSelect = (array, select) => {
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

// Prints the selected items to front-end
const printSelection = (array, select, output, ordersArray, orderPricesArray) => {
    // Pull value of beverage select
    var selectedId = select.value;
    // Find the selected appetizer in appetizer menu
    const result = array.filter(a => a.id == selectedId );
    output.innerHTML = `${result[0].name} $${result[0].price.toFixed(2)}`;
    // Push orders to respective array
    ordersArray.push(result[0].name)
    orderPricesArray.push(result[0].price);
}

// Outputs the total price by reducing an array of prices.
const outputTotal = (array, priceOutput) => {
    priceOutput = array.reduce((a, b) => a + b, 0);
    totalOutput.innerHTML = `${priceOutput.toFixed(2)}`;
}

export { renderTables, renderSelect, printSelection, outputTotal }