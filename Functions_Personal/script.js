//Connor_Healy_Functions_Personal_Family_Age_Calculator

//This is the family Age Calculator.




alert("this calculator will tell you how many years you have left to live it the life expectancy is 80 years old.")

yourAge = prompt("How old are you?");

var yourAge;
var expectAge = 80;
var yearsLeft;

function calcYears(){

    yearsLeft = (expectAge - yourAge);
    return yearsLeft;

}

calcYears();




console.log(yearsLeft);

