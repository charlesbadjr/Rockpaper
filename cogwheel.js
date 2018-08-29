// grab on click which item was clicked.

// need funtion 2 randomly generates 3 whole numbers could be an array. selected randomly.

// run check against what picture to display based on win lose or tie

// create an array to save Win: lose: Participation: 
// save count of win lose and tie in the array

 var paperBtn = document.getElementById('paper_button')
 var scissorBtn = document.getElementById('scissor_button')
 var rockBtn = document.getElementById('rock_button')
 var winImg = document.getElementById("opponant" )
//var list = document.getElementById('getScore')


function randomNumber() {
    return Math.floor(Math.random() * (4 - 0) + 0);
}

// event listners here maybe. 

// when you click ROCK   

rockBtn.addEventListener("mousedown", secondFunction);
rockBtn.addEventListener("mouseup", secondFunction1);
rockBtn.addEventListener("click", myFunction);

// when you click Paper

paperBtn.addEventListener("mousedown", secondFunction);
paperBtn.addEventListener("mouseup", secondFunction1);
paperBtn.addEventListener("click", myFunction);

// when you click Scissors

scissorBtn.addEventListener("mousedown", secondFunction);
scissorBtn.addEventListener("mouseup", secondFunction1);
scissorBtn.addEventListener("click", myFunction);


usersGuess = "";
// talking smack
function myFunction(evt) {
    clicked = evt.target;
    var usersGuess = clicked.id;
    var computersGuess = randomNumber();

    if (computersGuess >= 2) {
        // paper
        computersGuess = 2;
        document.getElementById("paper").className = "imgElt";
        document.getElementById("scissors").className = "imgElt hidden";
        document.getElementById("rock").className = "imgElt hidden";
    } else if (computersGuess >= 1) {
// scissors
    computersGuess = 1;
        document.getElementById("paper").className = "imgElt hidden";
        document.getElementById("scissors").className = "imgElt";
        document.getElementById("rock").className = "imgElt hidden";
    } else {
// Rock
computersGuess = 0;
        document.getElementById("paper").className = "imgElt hidden";
        document.getElementById("scissors").className = "imgElt hidden";
        document.getElementById("rock").className = "imgElt";
    }

    switch (usersGuess) {
        // win numbers
        case "rock_button":
            console.log( computersGuess);
            result = 0 - computersGuess;
            // result is either: -1, -2, or 2
            if(result == -1){
            // won
            score[0]++;
            }else if (result == -2) {
            //lost
            score[1]++;
            } else {
                score[2]++;
            }

            break;
        // lose number
        case "scissor_button":
        result = 1 - (computersGuess + 1);
        // result is either: 0 = ROCK, 1 = SCISSORS, 2 = PAPER 
        if(result == 0){
            // won
            score[0]++;
            }else if (result == 2) {
            //lost
            score[1]++;
            } else {
                score[2]++;
            }
            break;
            
            // tie numbers 
        case "paper_button":
        console.log("boobies");
        result = 2 - computersGuess;
// results: ROCK = 2, PAPER = 0, SCISSORS = 1

if(result == 2){
    // won
    score[0]++;
    }else if (result == 1 ) {
    //lost
    score[1]++;
    } else {
        score[2]++;
    }
            break;
    }
    
    //swtich choose which button the user pressed
    // D.R.Y.
    
    updateScore();
}
// taunting 
// can refactor with clicked = evt.type;

function secondFunction(evt) {
    document.getElementById("chickenDinner").innerHTML += "You're a litle Bitch!"
    }

function secondFunction1(evt) {
    document.getElementById("chickenDinner").innerHTML = null
}


// case statement to choose winner.




// score array win lose partMed
// (win: 0, lose: 0, partMed: 0,)

var score = [0, 0, 0 ];

function updateScore(){
document.getElementById("wins").innerHTML ="Wins: " + score[0];
document.getElementById("loss").innerHTML = "Losses: " + score[1];
document.getElementById("partMed").innerHTML = "Participation Medal: " + score[2];
document.getElementById("winsT").innerHTML ="Wins: " + score[0];
document.getElementById("lossT").innerHTML = "Losses: " + score[1];
document.getElementById("partMedT").innerHTML = "Participation Medal: " + score[2];
}


updateScore();
