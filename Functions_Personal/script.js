//Connor_Healy_Functions_Personal_Family_Age_Calculator

//This is the family Age Calculator.




alert("This calculator will add up the ages of everyone in your immediate family. " +
    "Enter the ages below. If it doesn't apply leave it blank. 'Click OK when ready.'");


var a;



age1 = prompt("How old are you?");
age2 = prompt("How old is your wife/Girlfriend/Husband/Boyfriend?");
age3 = prompt("How old is your first born?");
age4 = prompt("How old is your second born?");
age5 = prompt("How old is your third born?");
age6 = prompt("How old is your fourth born?");
age7 = prompt("How old is your fifth born? God bless you, by the way!");


var totalAge = function(){
    a = (age1+age2+age3+age4+age5+age6+age7);
    return a;

};
totalAge();


alert("Your family's total age is " + a);

