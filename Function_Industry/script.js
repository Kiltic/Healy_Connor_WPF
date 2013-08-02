//Connor_Healy_Functions_Industry


//Ths calculator will tell me how much under the amount of income I need daily to run my auto repair shop that I am each day.


var income;                  //This is the first variable that will equal the user input for the prompt

var baseLine = 1000;          //This variable is the baseline price that must be made each day to keep open

income = prompt("How much money have you made so far today?");      //  This is the prompt where the user will fill in the amount of money they made so far today.


function findDiff(){                //this tells the computer that there is a function

    total = (baseLine - income);       //this is the code that will find how much more money you need

    return total;
}
findDiff(baseLine, income);

var x = total;

console.log("You need $" + x +" more dollars to make your minimum amount for the day.");





