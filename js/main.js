let pieces = [
    {
        id: 0,
        position: 0,
    }
]


let best = 4;

console.log(document.querySelector(".R-player1"));



let green1XPosMoment = [12,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let green1YPosMoment = [3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let green2XPosMoment = [13,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let green2YPosMoment = [3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let green3XPosMoment = [12,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let green3YPosMoment = [4,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let green4XPosMoment = [13,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let green4YPosMoment = [4,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let red1XPosMoment = [3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let red1YPosMoment = [3,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let red2XPosMoment = [3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let red2YPosMoment = [4,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let red3XPosMoment = [4,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let red3YPosMoment = [3,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let red4XPosMoment = [4,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let red4YPosMoment = [4,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let blue1XPosMoment = [3,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let blue1YPosMoment = [12,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let blue2XPosMoment = [4,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let blue2YPosMoment = [12,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let blue3XPosMoment = [3,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let blue3YPosMoment = [13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let blue4XPosMoment = [4,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let blue4YPosMoment = [13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];

function r1Pos(R1) {
document.querySelector(".R-player1").style.gridColumn = red1XPosMoment[R1];   
document.querySelector(".R-player1").style.gridRow = red1YPosMoment[R1];   
}
function r2Pos(R2) {
document.querySelector(".R-player2").style.gridColumn = red2XPosMoment[R2];   
document.querySelector(".R-player2").style.gridRow = red2YPosMoment[R2];   
}
function r3Pos(R3) {
document.querySelector(".R-player3").style.gridColumn = red3XPosMoment[R3];   
document.querySelector(".R-player3").style.gridRow = red3YPosMoment[R3];   
}
function r4Pos(R4) {
document.querySelector(".R-player4").style.gridColumn = red4XPosMoment[R4];   
document.querySelector(".R-player4").style.gridRow = red4YPosMoment[R4];   
}

r1Pos(21);
r2Pos(0);
r3Pos(0);
r4Pos(0);


let red1pice = document.querySelector(".R-player1");

red1pice.style.gridRow = red1yPos

function movePience(piece, steps){
    piece.style.gridColum = red1XPosMoment[steps];
    piece.style.gridRow = red1YPosMoment[steps];
    let currentSteps = parseInt(piece.getAttribute("data-steps-taken"));
    currentSteps += steps;
    piece.setAttribute("data-steps-taken", currentSteps);
}

function dice(piece, steps){
    let dice = Math.random() *6 +1;
 }

 
 function redTurn(){
    dice();
    onclickRed();
    movePience();
    checkPos();
    if (parseInt(data-steps-taken) == 45) {
        
    }else if (parseInt()){

    }

}

while (condition) {
    redTurn();

}


while (allred == 45 || allblue == 45) {
console.WriteLine("red turn");
redTurn();
console.WriteLine("blue turn");
blueTurn();
console.WriteLine("green turn");
greenTurn();
console.WriteLine("yellow turn");
yellowTurn();   
}














/*
let redpiceses = [0,0,0,0];
let redpiceses = [0,0,0,0];
let redpiceses = [0,0,0,0];
let redpiceses = [0,0,0,0];


x
*/
