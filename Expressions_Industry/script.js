//Healy_Connor_Expressions_Industry


//Here I will calculate the total bill for my Auto Repair shop called Healy Automotive Service using
//Parts, Labor and 7% sales tax.

var subtotal;

var total;

var tax = 1.07;

alert("Welcome to Healy Automotive Service's Bill Calculator.");
console.log("Welcome to Healy Automotive Service's Bill Calculator.");
var parts = prompt("Please insert total Parts amount here. When done, Click 'OK'.");
console.log("The parts come to: $" + parts);
var labor = prompt("Please insert total Labor amount here. When done, Click 'OK'.");
console.log("The Labor comes to: $" + labor);
subtotal = +parts + +labor;

total = subtotal * tax;

alert("the subtotal of the bill is $" + subtotal + " and the total with tax comes to $" + total);

console.log("the subtotal of the bill is $" + subtotal + " and the total with tax comes to $" + total);




