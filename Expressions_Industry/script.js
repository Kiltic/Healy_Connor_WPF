//Healy_Connor_Expressions_Industry


//Here I will calculate the total bill for my Auto Repair shop called Healy Automotive Service using
//Parts, Labor and 7% sales tax.

var subtotal;     //this is the variable for the subtotal

var total;      //this is the variable for the total

var tax = 1.07;      //variable for tax which is equal to 1.07

alert("Welcome to Healy Automotive Service's Bill Calculator.");    //this is the first thing user will see.  Kind of a welcome screen.
console.log("Welcome to Healy Automotive Service's Bill Calculator.");      //the developer will see this.  Kind of a welcome screen.
var parts = prompt("Please insert total Parts amount here. When done, Click 'OK'.");   //this is going to represent the information the user enters into the prompt box.
console.log("The parts come to: $" + parts);          //console entry of result of above prompt.
var labor = prompt("Please insert total Labor amount here. When done, Click 'OK'.");       //this is going to represent the information the user enters into the prompt box.
console.log("The Labor comes to: $" + labor);        //console entry of result of above prompt.
subtotal = +parts + +labor;        //this is the subtotal.  It is the sum of the parts and the labor entered by the user in the prompts above.
   subtotal = subtotal.toFixed(2);    //This keeps the numbers after the decimals down to 2 characters.
total = subtotal * tax;             //This will calculate the total taking the subtotal and multiplying it by the tax variable
      total = total.toFixed(2);
alert("the subtotal of the bill is $" + subtotal + " and the total with, with NJ Sales tax @ 7%, comes to $" + total);     //The user will see this. it will show the results of all of the calculations above.

console.log("The subtotal of the bill is $" + subtotal + " and the total, with NJ Sales tax @ 7%, comes to $" + total);    //The developer willsee this. it will show the results of all of the calculations above.

alert("Thank you for your money!");     //fun alert for the user to see
console.log("Thank you for your money!");     //fun alert for the developer to see.




