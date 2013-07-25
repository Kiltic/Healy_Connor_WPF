//Connor_Healy Conditionals_Personal

//Based on mood, what kind of video game do you want to play?


var happy;               //this is the first variable that the user will pick. It will tell them an alert.
var angry;             //this is the second variable that the user will pick. It will tell them an alert.
var mischievous;        //this is the third variable that the user will pick. It will tell them an alert.
var answer;           //this is the answer variable.  it is the "constant" used in the if/else statements below.

alert("Welcome to Connor's Game-Picker.");     //this alert is the "Welcome alert" it states what the program is/
alert("I will tell what video game you should play based on your mood. Ready? 'Click OK'");     //This alert states how the program will work to the user.

answer = prompt("what mood are you in, happy, angry or mischievous?");   //the first prompt. The user will pick from the list of 3 variables: happy, angry, mischievous.

if (answer === "happy"){            //if the user picked "happy" the program will print out the alert below
    alert("Oh, you have to play Sonic: Ultimate Racing")          //the alert to be printed based on the user's choice above
}else if(answer === "angry"){            //if the user picked "angry" the program will print out the alert below
    alert("Gears of War 3, no doubt, Gears of war 3. Blood, death, AWESOMENESS, murder and mayhem!!  Nothing better, you will get up sweating.");
}else if(answer === "mischievous"){        //if the user picked "mischievous" the program will print out the alert below
    alert("No doubt, Assasin's Creed 3. Steal from old ladies, slit throats and keep walking, drink beer and cause all sorts of ruckus. Too much fun!");

};//else if(answer = ""){
    //alert("What are you trying to do, I am new at this! wait, you can't spell mischievous, can you.  Try again");

//};


