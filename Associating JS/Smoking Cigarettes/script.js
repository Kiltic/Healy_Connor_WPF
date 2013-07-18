//Smoking_Cigarettes -- How much time do you spend smoking Cigarettes?


var averageTime = 6;  //this is the average time an American takes to smoke a cigarette
var averageCost = 8.25;  //this is the average cost of a cigarette in the US
var cigsPack = 20;    //this is the amount of cigarettes in a pack
var minHour = 60;     //this is the amount of minutes in an hour
var hoursDay = 24;   //this is the amount of hours in a day
var daysYear = 365;   //this is the amount of days in a year
var tenYears = 10;   //this is the amount of years in ten years
var cigsDay = prompt("How many Cigarettes do you smoke per day? Be honest!");  //this is the original prompt where the user will input his required info
var totalMinDay = cigsDay * averageTime;    //this will find the amount of minutes/day the user smokes
totalMinDay = totalMinDay.toFixed(2);      //this sets the amount of characters that will show after the decimal point
var totalHoursDay = totalMinDay / minHour;    //this will find the amount of hours/day the user smokes
totalHoursDay = totalHoursDay.toFixed(2);  //this sets the amount of characters that will show after the decimal point
var totalDays = totalHoursDay * daysYear / hoursDay;    //this will find the amount of days of the year the user smokes
totalDays = totalDays.toFixed(2);    //this sets the amount of characters that will show after the decimal point
var totalCigs = cigsDay * daysYear / cigsPack;     //this will find the amount of packs of smokes per year the user smokes
totalCigs = totalCigs.toFixed(2);         //this sets the amount of characters that will show after the decimal point
var totalCost = totalCigs * averageCost;  //this will find the average cost of cigarettes per year the user spends
totalCost = totalCost.toFixed(2);       //this sets the amount of characters that will show after the decimal point
var totalTen = totalCost * tenYears;     //this will find the average cost of cigarettes per 10 years the user spends
totalTen = totalTen.toFixed(2);       //this sets the amount of characters that will show after the decimal point


alert("You smoke for an average of " + totalMinDay + " minutes a day a day. \nThat doesn't sound too bad huh? Click 'OK'.");      //this is the first alert telling the user how many minutes/day they smoke
console.log("You smoke for " + totalMinDay + " minutes a day a day. \nThat doesn't sound too bad huh?");       //this is the first log telling the user how many minutes/day they smoke
alert("That number translates to " + totalHoursDay + " hours a day. \nStill not too bad, I mean it is only " + totalHoursDay + " hours a day, right?\n Click 'OK'");     //this is the alert telling the user how many hours/day they smoke
console.log("That number translates to " + totalHoursDay + " hours a day. \nStill not too bad, I mean it is only " + totalHoursDay + " hours a day, right?");  //this is the log telling the user how many hours/day they smoke
alert("How about this. You spend " + totalDays + " days out of each year smoking cigarettes!\n Still not enough? Ok, Click 'OK'");       //this is the alert telling the user how many days/year they smoke
console.log("How about this. You spend " + totalDays + " days out of each year smoking cigarettes!\n Still not enough?");   //this is the log telling the user how many days/year they smoke
alert("did you know you smoke " + totalCigs + " packs of cigarettes a year? Click'OK'");       //this is the alert telling the user how many packs/year they smoke
console.log("did you know you smoke " + totalCigs + " packs of cigarettes a year?");       //this is the log telling the user how many packs/year they smoke
alert("Did you know you spend $" + totalCost + " on a smokes each year? Click 'OK'.");     //this tells the user how much they spend on cigarettes each year
console.log("Did you know you spend $" + totalCost + " on a smokes each year?");     //this tells the user how much they spend on cigarettes each year
alert("if you quit smoking and opened an account to put the money you would spend on butts into it, in 10 years you could save $" + totalTen + ". What would that buy you?");    //this tells the user how much they will spend on cigarettes in 10 years
console.log("if you quit smoking and put the money you would spend\non butts into it, in 10 years you could save $" + totalTen + ". What would that buy you?");    //this tells the user how much they will spend on cigarettes in 10 years
alert("this message has been brought to you by the\n'Hey, I still smoke too, just thought you should know' foundation.\nThank you for taking my little survey. :) ");
