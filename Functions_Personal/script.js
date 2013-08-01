//Connor_Healy_Functions_Personal_Family_Age_Calculator

//This is the family Age Calculator.

alert("This calculator will add up the ages of you and your significant other. " +
    "Enter the ages below. If you are single, leave it blank and this will be pretty easy to figure out. 'Click OK when ready.'");

var age1 = prompt("How old are you?");
var age2 = prompt("How old is your wife/Girlfriend/Husband/Boyfriend?");


var totalAge = function(age1, age2){
    var age = (age1 + age2);
    return age;

}

var age = totalAge(age1, age2);



alert("Your family's total age is " + age);

/*var calcArea = function(width, height){

    var area = width * height;
    return area;
}

var a = calcArea(20, 20);
console.log (a);
