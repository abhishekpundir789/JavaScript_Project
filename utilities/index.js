// ---------------------------------------------- //
// 1. Renders Tables
// Takes array, and renders to given table
// ---------------------------------------------- //
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

// ---------------------------------------------- //
// 2. Renders Select Options
// Takes array, and renders to given select box
// ---------------------------------------------- //
const renderSelect = (array, select) => {
    array.forEach( a => {
      // create an option element 
      const option = document.createElement('option');
      // edit the inner HTML to include the price and name of item
      option.innerHTML = `${a.name}`
      // add attribute of value and assign the item's ID
      option.setAttribute("value", a.id);
      // then we select the table, and append the table row which now includes the two <td>'s
      select.appendChild(option);
    });
}

// ---------------------------------------------- //
// 3. Renders Select Options
//    * Takes array, and renders to given output (element)
//    * Also outputs orders to an ordersArray and 
//      compiles prices in an orderPricesArray
// ---------------------------------------------- //
const printSelection = (array, select, output, ordersArray, orderPricesArray) => {
    // Pull value of beverage select
    var selectedId = select.value;
    // Find the selected appetizer in appetizer menu
    const result = array.filter(a => a.id == selectedId );
    output.innerHTML = `${result[0].name}`;
    // Push orders to respective array
    ordersArray.push(result[0])
    orderPricesArray.push(result[0].price);
}

// ---------------------------------------------- //
// 4. Outputs the total sum of an array
//    * If there is an outputElement, for print, 
//      it will print priceOutput.
// ---------------------------------------------- //
const outputTotal = (array, priceOutput, outputElement) => {
    priceOutput = array.reduce((a, b) => a + b, 0);

    // let outputElement be optional
    if(outputElement){
        outputElement.innerHTML = `${priceOutput.toFixed(2)}`;
    }

    return priceOutput;
}

// ---------------------------------------------- //
// 5. Renders a receipt upon checkout
//     * takes price, the output element (receiptElement),
//     * and the array of selected orders.
// ---------------------------------------------- //
const renderReceipt = (price, receiptElement, ordersArray) => {

  // Create and append heading element
  const h2 = document.createElement('h2');
  h2.innerHTML = 'Receipt'
  receiptElement.appendChild(h2);

  // Create and append unordered list
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'receiptList');
  receiptElement.appendChild(ul);

  // Create and append order summary
  ordersArray.forEach( order => {
    const listItem = document.createElement('li');
    const spanQuantity = document.createElement('span')
    const spanName = document.createElement('span')
    const spanPrice = document.createElement('span')
    
    spanQuantity.innerHTML = 1;
    spanName.innerHTML = order.name
    spanPrice.innerHTML = order.price.toFixed(2);

    listItem.appendChild(spanQuantity);
    listItem.appendChild(spanName);
    listItem.appendChild(spanPrice);

    // if the item costs nothing, don't include in the receipt
    if(order.price === 0) return null;
    ul.appendChild(listItem);
  });

  // Price Calculations
  var subTotal = +price;
  var taxTotal = +price*0.14;
  var tipTotal = +price*0.20;
  var grandTotal = subTotal + taxTotal + tipTotal;

  // Create a receipt item for SUBTOTAL, and add inner HTML
  const receiptItem__Subtotal = document.createElement('div');
  receiptItem__Subtotal.setAttribute('class', 'receiptItem');

  const spanSubtotalLabel = document.createElement('span');
  const spanSubtotalOutput = document.createElement('span');

  spanSubtotalLabel.innerHTML = 'Subtotal:'
  spanSubtotalOutput.innerHTML = subTotal.toFixed(2);

  receiptItem__Subtotal.appendChild(spanSubtotalLabel)
  receiptItem__Subtotal.appendChild(spanSubtotalOutput)

  receipt.appendChild(receiptItem__Subtotal);

  // Create a receipt item for TIP, and add inner HTML
  const receiptItem__Tip = document.createElement('div');
  receiptItem__Tip.setAttribute('class', 'receiptItem');

  const spanTipLabel = document.createElement('span');
  const spanTipOutput = document.createElement('span');

  spanTipLabel.innerHTML = 'Tip:'
  spanTipOutput.innerHTML = tipTotal.toFixed(2);

  receiptItem__Tip.appendChild(spanTipLabel);
  receiptItem__Tip.appendChild(spanTipOutput);

  receipt.appendChild(receiptItem__Tip);

  // Create a receipt item for TAX, and add inner HTML
  const receiptItem__Tax = document.createElement('div');
  receiptItem__Tax.setAttribute('class', 'receiptItem');

  const spanTaxLabel = document.createElement('span');
  const spanTaxOutput = document.createElement('span');

  spanTaxLabel.innerHTML = 'Tax:'
  spanTaxOutput.innerHTML = taxTotal.toFixed(2);

  receiptItem__Tax.appendChild(spanTaxLabel);
  receiptItem__Tax.appendChild(spanTaxOutput);

  receipt.appendChild(receiptItem__Tax);

  // Create a receipt item for TOTAL, and add inner HTML
  const receiptItem__Total = document.createElement('div');
  receiptItem__Total.setAttribute('class', 'receiptItem');

  const spanTotalLabel = document.createElement('span');
  const spanTotalOutput = document.createElement('span');

  spanTotalLabel.innerHTML = 'Total:'
  spanTotalOutput.innerHTML = grandTotal.toFixed(2);

  receiptItem__Total.appendChild(spanTotalLabel);
  receiptItem__Total.appendChild(spanTotalOutput);

  receipt.appendChild(receiptItem__Total);
}

export { renderTables, renderSelect, printSelection, outputTotal, renderReceipt }