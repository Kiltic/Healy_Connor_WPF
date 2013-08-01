//Connor_Healy_Functions_Personal_Family_Age_Calculator

//This is the 'till your dead' calculator.




alert("this calculator will tell you how many years you have left to live it the life expectancy is 80 years old.")       //this is the welcome alert

yourAge = prompt("How old are you?");       //this is the first prompt

var yourAge;                   //this is the first variable, it will be used eith the prompt to collect user's age'
var expectAge = 80;            //This variable will be the constant
var yearsLeft;                //this var will be the sum of the code in the function

function calcYears(){          //the first line of the function tell the browser that I am creating a function

    yearsLeft = (expectAge - yourAge);     //this is the code that the function will run
    return yearsLeft;

}

calcYears();

console.log(yearsLeft);

