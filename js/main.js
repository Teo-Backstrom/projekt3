



let Red1 = 0;
let Red2 = 0;
let Red3 = 0;
let Red4 = 0;
let Green1 = 0;
let Green2 = 0;
let Green3 = 0;
let Green4 = 0;
let Blue1 = 0;
let Blue2 = 0;
let Blue3 = 0;
let Blue4 = 0;
let Yellow1 = 0;
let Yellow2 = 0;
let Yellow3 = 0;
let Yellow4 = 0;

let val = 0;
let flagga = false;

let currentPlayer = 0;
let playerClassname = ["redPlayer","greenPlayer","bluePlayer","yellowPlayer"]
let playerPositions = [0,0,0,0];

 function tärning () {
         return Math.floor(Math.random() * 6) + 1;
        }

        let playerXArray = [
            [3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7],
            [3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7],
            [4,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7],
            [4,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7],
            
        ]


  


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
let yellow1XPosMoment = [12,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let yellow1YPosMoment = [12,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let yellow2XPosMoment = [13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let yellow2YPosMoment = [12,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let yellow3XPosMoment = [12,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let yellow3YPosMoment = [13,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let yellow4XPosMoment = [13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let yellow4YPosMoment = [13,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];

function move(playerClassname, position, xArray, yArray) {
    document.querySelector("." + playerClassname).style.gridColumn = xArray[position];
    document.querySelector("." + playerClassname).style.gridRow = yArray[position];
}

/*function r1Pos(R1) {
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


function g1Pos(G1) {
document.querySelector(".G-player1").style.gridColumn = green1XPosMoment[G1];   
document.querySelector(".G-player1").style.gridRow = green1YPosMoment[G1];   
}
function g2Pos(G2) {
document.querySelector(".G-player2").style.gridColumn = green2XPosMoment[G2];   
document.querySelector(".G-player2").style.gridRow = green2YPosMoment[G2];   
}
function g3Pos(G3) {
document.querySelector(".G-player3").style.gridColumn = green3XPosMoment[G3];   
document.querySelector(".G-player3").style.gridRow = green3YPosMoment[G3];   
}
function g4Pos(G4) {
document.querySelector(".G-player4").style.gridColumn = green4XPosMoment[G4];   
document.querySelector(".G-player4").style.gridRow = green4YPosMoment[G4];   
}

function b1Pos(B1) {
document.querySelector(".B-player1").style.gridColumn = blue1XPosMoment[B1];   
document.querySelector(".B-player1").style.gridRow = blue1YPosMoment[B1];   
}
function b2Pos(B2) {
document.querySelector(".B-player2").style.gridColumn = blue2XPosMoment[B2];   
document.querySelector(".B-player2").style.gridRow = blue2YPosMoment[B2];   
}
function b3Pos(B3) {
document.querySelector(".B-player2").style.gridColumn = blue3XPosMoment[B3];   
document.querySelector(".B-player2").style.gridRow = blue3YPosMoment[B3];   
}
function b4Pos(B4) {
document.querySelector(".B-player4").style.gridColumn = blue4XPosMoment[B4];   
document.querySelector(".B-player4").style.gridRow = blue4YPosMoment[B4];   
}

function y1Pos(Y1) {
document.querySelector(".Y-player1").style.gridColumn = yellow1XPosMoment[Y1];   
document.querySelector(".Y-player1").style.gridRow = yellow1YPosMoment[Y1];   
}
function y2Pos(Y2) {
document.querySelector(".Y-player2").style.gridColumn = yellow2XPosMoment[Y2];   
document.querySelector(".Y-player2").style.gridRow = yellow2YPosMoment[Y2];   
}
function y3Pos(Y3) {
document.querySelector(".Y-player3").style.gridColumn = yellow3XPosMoment[Y3];   
document.querySelector(".Y-player3").style.gridRow = yellow3YPosMoment[Y3];   
}
function y4Pos(Y4) {
document.querySelector(".Y-player4").style.gridColumn = yellow4XPosMoment[Y4];   
document.querySelector(".Y-player4").style.gridRow = yellow4YPosMoment[Y4];   
}
*/


 /*function dice(){
    console.log(Math.floor(Math.random() * 10));
 }
 */


function redChoise(){
    flagga = false;
    while (flagga = false) {
      if (document.querySelector(".red1Button").clicked == true) {
        val = 1;
        flagga = true;
       } else if(document.querySelector(".red2Button").clicked == true){
           val = 2;
           flagga = true;
       } else if(document.querySelector(".red3Button").clicked == true){
           val = 3;
           flagga = true;
       } else if(document.querySelector(".red4Button").clicked == true){
           val = 4;
           flagga = true;
       } else{
           console.WriteLine("något gick fel röd");
       }
    }
    
}

function greenChoise() {
    flagga = false;
    while (flagga = false) {
        if(document.querySelector(".green1Button").clicked == true){
            val = 5;
            flagga = true;
        } else if(document.querySelector(".green2utton").clicked == true){
            val = 6;
            flagga = true;
        } else if(document.querySelector(".green3Button").clicked == true){
            val = 7;
            flagga = true;
        } else if(document.querySelector(".green4Button").clicked == true){
            val = 8;
            flagga = true;
        } else{
            console.WriteLine("något gick fel grön")
        }
        
    }
}

function blueChoise () {
    flagga = false;
    while (flagga = false) {
        if(document.querySelector(".blue1Button").clicked == true){
            val = 9;
            flagga = true
        } else if(document.querySelector(".blue2Button").clicked == true){
            val = 10;
            flagga = true;
        } else if(document.querySelector(".blue3Button").clicked == true){
            val = 11;
            flagga = true;
        } else if(document.querySelector(".blue4Button").clicked == true){
            val = 12;
            flagga = true;
        } else{
            console.WriteLine("något gick fel blå")
        }
        
    }
    
}

function yellowChoise() {
    flagga = false;
    while (flagga = false) {
        if(document.querySelector(".yellow1Button").clicked == true){
            val = 13;
            flagga = true;
        } else if(document.querySelector(".yellow2Button").clicked == true){
            val = 14;
            flagga = true;
        } else if(document.querySelector(".yellow3Button").clicked == true){
            val = 15;
            flagga = true;
        } else if(document.querySelector(".yellow4Button").clicked == true){
            val = 16;
            flagga = true;
        } else{
            console.WriteLine("något gick fel gul")
        }
        
    }
    
}

function movePice() {

    switch (val) {
        case 1:
            Red1 = Red1 + tärning();
            break;

        case 2:
            Red2 = Red2 + tärning();
            break;

        case 3:
            Red3 = Red3 + tärning();
            break;

        case 4:
            Red4 = Red4 + tärning();
            break;
        
        case 5:
            Green1 = Green1 + tärning();
            break;

        case 6:
            Green2 = Green2 + tärning();
            break;

        case 7:
            Green3 = Green3 + tärning();
            break;

        case 8:
            Green4 = Green4 + tärning();
            break;

        case 9:
            Blue1 = Blue1 + tärning();
            break;

        case 10:
            Blue2 = Blue2 + tärning();
            break;

        case 11:
            Blue3 = Blue3 + tärning();
            break;
        
        case 12:
            Blue4 = Blue4 + tärning();
            break;

        case 13:
            Yellow1 = Yellow1 + tärning();
            break;

        case 14:
            Yellow2 = Yellow2 + tärning();
            break;

        case 15:
            Yellow3 = Yellow3 + tärning();
            break;
        
        case 16:
            Yellow4 = Yellow4 + tärning();
            break;
        
        default:
            break;
    } 
    
}

function upDatePos() {
r1Pos(Red1);
r2Pos(Red2);
r3Pos(Red3);
r4Pos(Red4);
g1Pos(Green1);
g2Pos(Green2);
g3Pos(Green3);
g4Pos(Green4);
b1Pos(Blue1);
b2Pos(Blue2);
b3Pos(Blue3);
b4Pos(Blue4);
y1Pos(Yellow1);
y2Pos(Yellow2);
y3Pos(Yellow3);
y4Pos(Yellow4);
}


while (Red1 != 45 && Red2 != 45 && Red3 != 45 && Red4 != 45 || Green1 != 45 && Green2 != 45 && Green3 != 45 && Green4 != 45 || Blue1 != 45 && Blue2 != 45 && Blue3 != 45 && Blue4 != 45 || Yellow1 != 45 && Yellow2 != 45 && Yellow3 != 45 && Yellow4 != 45) {
    redChoise();
    movePice();
    upDatePos();
    greenChoise();
    movePice();
    upDatePos();
    blueChoise();
    movePice();
    upDatePos();
    yellowChoise();
    movePice();
    upDatePos();
}

