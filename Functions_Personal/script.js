//Connor_Healy_Functions_Personal_Family_Age_Calculator

//This is the family Age Calculator.

alert("This calculator will add up the ages of everyone in your immediate family. " +
    "Enter the ages below. If it doesn't apply leave it blank. 'Click OK when ready.'");

var age1 = prompt("How old are you?");
var age2 = prompt("How old is your wife/Girlfriend/Husband/Boyfriend?");
var age3 = prompt("How old is your first born?");
var age4 = prompt("How old is your second born?");
var age5 = prompt("How old is your third born?");
var age6 = prompt("How old is your fourth born?");
var age7 = prompt("How old is your fifth born? God bless you, by the way!");







var totalAge = function(age1, age2, age3, age4, age5, age6, age7){
    totalAge = (age1 + age2+ age3 + age4 + age5 + age6 + age7)
    return totalAge;

}

alert("Your family's total age is " + totalAge);

/*var calcArea = function(width, height){

    var area = width * height;
    return area;
}

var a = calcArea(20, 20);
console.log (a);
