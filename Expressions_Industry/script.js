//Healy_Connor_Expressions_Industry


//Here I will calculate the total bill for my Auto Repair shop called Healy Automotive Service using
//Parts, Labor and 7% sales tax.

var subtotal;     //this is the variable for the subtotal

var total;      //this is the variable for the total

var tax = 1.07;      //variable for tax which is equal to 1.07

alert("Welcome to Healy Automotive Service's Bill Calculator.");    //this is the first thing user will see.  Kind of a welcome screen.
console.log("Welcome to Healy Automotive Service's Bill Calculator.");      //this is the first thing user will see.  Kind of a welcome screen.
var parts = prompt("Please insert total Parts amount here. When done, Click 'OK'.");   //this is going to represent the information the user enters into the prompt box.
console.log("The parts come to: $" + parts);          //console entry of result of above prompt.
var labor = prompt("Please insert total Labor amount here. When done, Click 'OK'.");       //this is going to represent the information the user enters into the prompt box.
console.log("The Labor comes to: $" + labor);        //console entry of result of above prompt.
subtotal = +parts + +labor;
   subtotal = subtotal.toFixed(2);
total = subtotal * tax;
      total = total.toFixed(2);
alert("the subtotal of the bill is $" + subtotal + " and the total with, with NJ Sales tax @ 7%, comes to $" + total);

console.log("The subtotal of the bill is $" + subtotal + " and the total, with NJ Sales tax @ 7%, comes to $" + total);

alert("Thank you for your money!");
console.log("Thank you for your money!");




