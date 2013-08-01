//Connor_Healy_Functions_Personal

var age1 = prompt("How old are you?");
var age2 = prompt("How old is your wife?");
var age3 = prompt("How old is your first born?");
var age4 = prompt("How old is your second born?");
var total = calcArea(width, height);




function calcArea(w, h){
    var area = w * h;
    return area;

}

console.log(total);

var calcArea = function(width, height){

    var area = width * height;
    return area;
}

var a = calcArea(20, 20);
console.log (a);
