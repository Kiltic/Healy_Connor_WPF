//Connor_Healy_Conditionals_Wacky

//Here i will take a few factors and decide whether you can get chicks easily or not.

var drool;
var bieber;
var fannyPack;


alert("Welcome to Connor's Chick-Checker!");
alert("Here we will find out, according to me, whether you have what it takes to get chicks! Ready? 'Click OK'");

drool = prompt("on a scale of 1-10, 1 being never and 10 being like a water fountain, how much would you say " +
    "that you drool while talking to chicks?");

bieber= prompt("How many Justin Bieber tee shirts do you have hanging in your closet?");

if(bieber != "0"){
    alert("Get out, you are no longer worthy to use the Chick-Checker!! I mean it, GO AWAY!");
}

fannyPack = prompt("Thank god! Ok, have you ever worn or still enjoy wearing a Fanny Pack?");

(fannyPack = "no" && drool, bieber = true) ? alert("Awesome") : alert("no chicks for you");
