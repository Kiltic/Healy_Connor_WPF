//How much time do you spend smoking Cigarettes?


var averageTime = 6;


var averageCost = 8.25;


var cigsPack = 20;


var minHour = 60;


var hoursDay = 24;


var daysYear = 365;


var tenYears = 10;


var cigsDay = prompt("How many Cigarettes do you smoke per day? Be honest!");

var totalMinDay = cigsDay * averageTime;

var totalHoursDay = totalMinDay / minHour;
totalHoursDay = totalHoursDay.toFixed(2);

var totalDays = totalHoursDay * daysYear / hoursDay;
totalDays = totalDays.toFixed(2);

var totalCigs = cigsDay * daysYear / cigsPack;
totalCigs = totalCigs.toFixed(2);

var totalCost = totalCigs * averageCost;
totalCost = totalCost.toFixed(2);

var totalTen = totalCost * tenYears;
totalTen = totalTen.toFixed(2);

console.log(totalMinDay);


alert("You smoke for an average of " + totalMinDay + " minutes a day a day. \nThat doesn't sound too bad huh? Click 'OK'.");

console.log("You smoke for " + totalMinDay + " minutes a day a day. \nThat doesn't sound too bad huh?");

alert("That number translates to " + totalHoursDay + " hours a day. \nStill not too bad, I mean it is only " + totalHoursDay + " hours a day, right?\n Click 'OK'");

console.log("That number translates to " + totalHoursDay + " hours a day. \nStill not too bad, I mean it is only " + totalHoursDay + " hours a day, right?");

alert("How about this. You spend " + totalDays + " days out of each year smoking cigarettes!\n Still not enough? Ok, Click 'OK'");

console.log("How about this. You spend " + totalDays + " days out of each year smoking cigarettes!\n Still not enough?");

alert("did you know you smoke " + totalCigs + " packs of cigarettes a year? Click'OK'");

console.log("did you know you smoke " + totalCigs + " packs of cigarettes a year?");

alert("Did you know you spend $" + totalCost + " on a smokes each year? Click 'OK'.");

console.log("Did you know you spend $" + totalCost + " on a smokes each year?");

alert("if you quit smoking and opened an account to put the money you would spend on butts into it, in 10 years you could save $" + totalTen + ". What would that buy you?");

console.log("if you quit smoking and put the money you would spend\non butts into it, in 10 years you could save $" + totalTen + ". What would that buy you?");

alert("this message has been brought to you by the\n'Hey, I still smoke too, just thought you should know' foundation.\nThank you for taking my little survey. :) ");
