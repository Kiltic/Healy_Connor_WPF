//Connor_Healy_Conditionals_Industry

//This will prove if you are ready to become a Web Designer.


var workHard;          //This is the first variable that will be equal the answer the user gives from the corresponding prompt.
var caffine;           //This is the second variable that will be equal the answer the user gives from the corresponding prompt.
var space;             //This is the third variable that will be equal the answer the user gives from the corresponding prompt.

alert("Welcome to Connor's 'Are you really ready to be a Web Designer?' quiz. Let's see if you are. 'Click OK'");    //This is the welcome alert saying Hi to the user.
workHard = prompt("Question 1 of 3. Are you willing to work endlessly and tirelessly for days straight without any recognition " +
    "for your work or what you have done? Enter yes or no below then 'Click OK'.");               //The first prompt that the user will have to respond to

caffine = prompt("Great! Question 2 of 3. Are you addicted or do you have no problem becoming addicted to a caffinated beverage, ie: " +
    "RedBull, Monster Energy Drinks or Soda? Enter yes or no and 'Click OK'");       //The second prompt that the user will have to respond to


space = prompt("Awesome! Question 3 of 3. Are you fine with being in a confined space, like a basement or a cubicle, with no windows " +
    "or fresh air for days on end? Enter yes or no then 'Click OK'");         //The third prompt that the user will have to respond to


if (workHard, caffine === "yes" && space === "yes" ){             //This line will decide if all three answers are true are false.
    alert("Lucky you, you are ready to be a Wed Designer, and will probably die early of a heart attack!");        //If ALL 3 answers are true then this code will run
    console.log("Lucky you, you are ready to be a Wed Designer, and will probably die early of a heart attack!");        //If ALL 3 answers are true then this code will run
}else{
    alert("I am sorry to say you do NOT have what it takes to be a Wed Designer, you are now doomed to a long, happy life!"); //If one or more answers are false then this code will run
    console.log("I am sorry to say you do NOT have what it takes to be a Wed Designer, you are now doomed to a long, happy life!"); //If one or more answers are false then this code will run
}


