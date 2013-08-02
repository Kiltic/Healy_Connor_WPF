//Connor_Healy_Functions_Indusrty


//Ths calculator will tell me how much under the amount of income I need daily to run my auto repair shop that I am each day.


var income;
var baseLine = 1000;

income = prompt("How much did you make today?");


function findDiff(){
    total = (baseLine - income);
    return total;
}
findDiff(baseLine, income);

var x = total;

console.log("You need $" + x +" more dollars to make your minimum amount for the day.");





