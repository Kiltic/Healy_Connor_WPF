//Healy_Connor_Expressions_Industry


//Here I will calculate the total bill for my Auto Repair shop called Healy Automotive Service using
//Parts, Labor and 7% sales tax.

var parts;

var labor;

var total;


var tax = 1.07;

alert("Welcome to Healy Automotive Service's Bill Calculator.");

parts = prompt("Please insert total Parts amount here. When done, Click 'OK'.");

labor = prompt("Please insert total Labor amount here. When done, Click 'OK'.");

total = labor + parts * tax;

action(total);

console.log(total);




