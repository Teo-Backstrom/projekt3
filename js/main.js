
let A = 0;
let B = 0;
let C = 0;
let D = 0;
let E = 0;
let F = 0;
let G = 0;
let H = 0;
let I = 0;
let J = 0;
let K = 0;
let L = 0;
let M = 0;
let N = 0;
let O = 0;
let P = 0;

let val = 0;

function tärning() {
    var dice = {
        sides: 6,
        roll: function () {
          var randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }
    
      function printNumber(number) {
        var placeholder = document.getElementById('placeholder');
        placeholder.innerHTML = number;
      }
      
      var button = document.getElementById('button');
      
      button.onclick = function() {
        var result = dice.roll();
        printNumber(result);
      };
}

  


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


 /*function dice(){
    console.log(Math.floor(Math.random() * 10));
 }
 */


function redChoise(){
    let flagga = false;
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
    let flagga = false;
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
    let flagga = false;
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
    let flagga = false;
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
            A = A + randomNumber;
            break;

        case 2:
            B = B + randomNumber;
            break;

        case 3:
            C = C + randomNumber;
            break;

        case 4:
            D = D + randomNumber;
            break;
        
        case 5:
            E = E + randomNumber;
            break;

        case 6:
            F = F + randomNumber;
            break;

        case 7:
            G = G + randomNumber;
            break;

        case 8:
            H = H + randomNumber;
            break;

        case 9:
            I = I + randomNumber;
            break;

        case 10:
            J = J + randomNumber;
            break;

        case 11:
            K = K + randomNumber;
            break;
        
        case 12:
            L = L + randomNumber;
            break;

        case 13:
            M = M + randomNumber;
            break;

        case 14:
            N = N + randomNumber;
            break;

        case 15:
            O = O + randomNumber;
            break;
        
        case 16:
            P = P + randomNumber;
            break;
        
        default:
            break;
    } 
    
}

function upDatePos(params) {
r1Pos(A);
r2Pos(B);
r3Pos(C);
r4Pos(D);
g1Pos(E);
g2Pos(F);
g3Pos(G);
g4Pos(H);
b1Pos(I);
b2Pos(J);
b3Pos(K);
b4Pos(L);
y1Pos(M);
y2Pos(N);
y3Pos(O);
y4Pos(P);
}


while (A != 45 && B != 45 && C != 45 && D != 45 || E != 45 && F != 45 && G != 45 && H != 45 || I != 45 && J != 45 && K != 45 && L != 45 || M != 45 && N != 45 && O != 45 && P != 45) {
    tärning();
    redChoise();
    movePice();
    upDatePos();
    tärning();
    greenChoise();
    movePice();
    upDatePos();
    tärning();
    blueChoise();
    movePice();
    upDatePos();
    tärning();
    yellowChoise();
    movePice();
    upDatePos();
}

