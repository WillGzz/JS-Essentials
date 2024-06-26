let length;
let width;

function calculateArea(){
  length = parseFloat(document.getElementById("length").value);
  width = parseFloat(document.getElementById("width").value);

  let area = length * width;
  document.getElementById("result").innerText = `The area of the rectangle is: ${area}`;
}
/*Practice Task*/
 function groceryTracker(){
   grocery1 = parseFloat(document.getElementById('grocery1').value)
   grocery2 = parseFloat(document.getElementById('grocery2').value)
   grocery3 = parseFloat(document.getElementById('grocery3').value)

   Amount = grocery1 + grocery2 + grocery3


   document.getElementById("result-2").innerText = `The total amount is: $${Amount} `

 }
/*
more efficient way of getting the same result
give each input a class of grocery and then,
loop through the values and return the sum

function calculateTotal() {
    var groceries = document.getElementsByClassName("grocery");
    var total = 0;

    for (var i = 0; i < groceries.length; i++) {
        total += Number(groceries[i].value);
    }

    document.getElementById("total").innerHTML = "Total Grocery Expenditure: " + total;
}



*/