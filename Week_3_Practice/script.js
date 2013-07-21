//Conditional Logic -else if

var kidHeight;
var minHeight = 48;
var wParentHeight = 45;


alert("Hey kids! Welcome to Rude Island Amusement Park!");

kidHeight = prompt("How tall are you in inches?");


if(kidHeight >= minHeight){

    //You can ride

    alert("You are tall enough, ride that bitch!");
    alert("Thank you for riding our bitchin' ride! Come again!")
}else if(kidHeight > wParentHeight){

    //you need a parent
    alert("Haha, you need your mommy!  Go get her fine ass and come back!");
    alert("Thank you for riding our bitchin' ride! Come again!")
}else{

     //Grow up!

    alert("Sorry bro, You are screwed!");
    alert("Go home! Next time read the rules on the site before you make your mommy drive you all of the way here!!")
}


