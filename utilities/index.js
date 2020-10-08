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

export { renderTables, renderSelect }