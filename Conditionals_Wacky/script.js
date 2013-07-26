//Connor_Healy_Conditionals_Wacky

//Here i will take a few factors and decide whether you can get chicks easily or not.

var drool;         //this is the first variable that will be equal to the answer that the user gives in its corresponding prompt
var bieber;         //this is the second variable that will be equal to the answer that the user gives in its corresponding prompt
var fannyPack;       //this is the third variable that will be equal to the answer that the user gives in its corresponding prompt


alert("Welcome to Connor's Chick-Checker!");        //the welcome alert
console.log("Welcome to Connor's Chick-Checker!");
alert("Here we will find out, according to me, whether you have what it takes to get chicks! Ready? 'Click OK'");    //this alert explains how the game is played
console.log("Here we will find out, according to me, whether you have what it takes to get chicks! Check below for the answer");    //this console.log explains how the game is played

drool = prompt("Are you a drooler? Would you say that you drool ALOT while talking to chicks?");   //This is the first prompt the user sees.

bieber= prompt("How many Justin Bieber tee shirts do you have hanging in your closet?");        //This is the second prompt the user sees.

if(bieber != "0"){                       //if/else statement about whether you have any bieber shirts. If you do, it ends the game and finishes by telling you "NO CHICKS FOR YOU!!"
    alert("Get out, you are no longer worthy to use the Chick-Checker!! I mean it, GO AWAY!");      //this alert will pop up if you answer anything but "0"
    console.log("You are into Bieber?! Get out, you are no longer worthy to use the Chick-Checker!! I mean it, GO AWAY!");       //this console.log will pop up if you answer anything but "0"
}else{

fannyPack = prompt("Thank god! Ok, have you ever worn or still enjoy wearing a Fanny Pack?");}        //This is the third prompt the user sees.

(fannyPack, drool === "no" && bieber === "0") ? alert("Awesome you should be knocking 'em dead!") : alert("NO CHICKS FOR YOU!!");      //Ternary statement instead of using traditional if/else statement
(fannyPack, drool === "no" && bieber === "0") ? console.log("Awesome you should be knocking 'em dead!") : console.log("NO CHICKS FOR YOU!!");     //Ternary statement instead of using traditional if/else statement prints to console.log
(fannyPack, drool === "no" && bieber === "0") ? console.log("Awesome you should be knocking 'em dead!") : console.log("NO CHICKS FOR YOU!!");     //Ternary statement instead of using traditional if/else statement prints to console.log