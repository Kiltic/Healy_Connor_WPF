//Expressions_Worksheet_Slice_of_Pie_Part_II

//Here we will find out how many slices of pizza each partygoer had if everybody had the same amount of slices/

var slicesPerPie = 8;     //total slices of pizza on each pie

var partyPeeps = 13;      //total amount of people at the party

var numOfPies = 10;       //total amount of pies
//take the number of pies times the number of slices on each pie and divide it by the number of people at the party

var totalSlices = numOfPies * slicesPerPie / partyPeeps;

var modulo = numOfPies * slicesPerPie % partyPeeps;

var text1 = "Each partygoer had ";        //Added text here to make the answer make more sense to the reader

var text2 = " slices of pie...EXACTLY!"

var text3 = "Sparky gets ";

var text4 = " slices too!"

console.log(text1 + totalSlices + text2); //

console.log(text3 + modulo +text4);
