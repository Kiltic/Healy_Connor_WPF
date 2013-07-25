//Connor_Healy Conditionals_Personal

//Based on mood, what kind of video game do you want to play?


var happy;
var angry;
var mischievous;
var answer;

alert("Welcome to Connor's Game-Picker.");
alert("I will tell what video game you should play based on your mood. Realy? 'Click OK'");

answer = prompt("what mood are you in, happy, angry or mischievous?");

if (answer === "happy"){
    alert("Oh, you have to play Sonic: Ultimate Racing")
}else if(answer === "angry"){
    alert("Gears of War 3, no doubt, Gears of war 3. Blood, death, AWESOMENESS, murder and mayhem!!  Nothing better, you will get up sweating.");
}else if(answer === "mischievous"){
    alert("No doubt, Assasin's Creed 3. Steal from old ladies, slit throats and keep walking, drink beer and cause all sorts of ruckus. Too much fun!");

}else if(answer = ""){
    alert("What are you trying to do, I am new at this! wait, you can't spell mischievous, can you.  Try again");

};


