//Connor_Healy_Functions_Personal

var width = prompt("What is the width?");
var height = prompt("What is the height?");

var total = calcArea(width, height);
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
