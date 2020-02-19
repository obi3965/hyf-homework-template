document.addEventListener('DOMContentLoaded', function (){

  //CREATE AN ARRAY 
  let names = ['johan', 'obi', 'peter'];

  //to see the lenght it will show 3 in the console, array always start from the zero
//   console.log(names.length)
    
 //THE PUSH METHODS ALWAYS ADD THE ITEMS AT THE END OF ARRAY
 let allNames = names.push('jakob', 'james')
 console.log(names)
 let output = document.querySelector("#output");

 //THE JOIN METHODS CONVERT ARRAY TO STRING
 output.innerHTML += (names.join('<br> '));

 //THERE ARE MANY ARRAY METOHDS IN JAVASCRIPT TO WORK WITH

  
 //SOME EXTRA THINGS, BUILDING AN ARRAY CONTAINING CUSTOMERS RECORDS
 var customersRecords = document.querySelector('#customer-records');

 customersRecords.addEventListener('click', function(){
    var customers = new Array();
    customers.push(["Customer Id", "Name", "Photo"]);
    customers.push([1, "John Hammond", "./img/image-1.jpeg"]);
    customers.push([2, "Mudassar Khan", "./img/image-2.jpeg"]);
    customers.push([3, "Suzanne Mathews", "./img/image-3.jpeg"]);
    customers.push([4, "Robert Schidner", "./img/image-4.jpeg"]);
    
    console.log(customers)

//Create a HTML Table element.
var table = document.createElement("TABLE");
table.border = "1";

//Get the count of columns.
var columnCount = customers[0].length;

//Add the header row.
var row = table.insertRow(-1);
for (var i = 0; i < columnCount; i++) {
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = customers[0][i];
    row.appendChild(headerCell);
}

//Add the data rows.
for (var i = 1; i < customers.length; i++) {
    row = table.insertRow(-1);
    for (var j = 0; j < columnCount; j++) {
        var cell = row.insertCell(-1);
        if (j < 2) {
            cell.innerHTML = customers[i][j];
        } else {
            var img = document.createElement("IMG");
            img.src = customers[i][j];
            cell.appendChild(img);
        }
    }
}

var dvTable = document.getElementById("dvTable");
dvTable.innerHTML = "";
dvTable.appendChild(table);
    
 })









})