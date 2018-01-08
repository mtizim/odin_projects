function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay() {
	let rand = getRandomInt(3);
	switch (rand){
		case 0:
			return "Rock";
		case 1:
			return "Paper";
		case 2:
			return "Scissors";
	}
}


function playRound(player){
	let computer = computerPlay();
	console.log(computer)
	if (player == "Rock"    && computer == "Scissors" ||
		player == "Paper"   && computer == "Rock"     ||
		player == "Scissors"&& computer == "Paper"      ){
		return ["win",player,computer];
	}
	if (player == computer){
		return ["tie",player,computer];
	}
	if (computer == "Rock"    && player == "Scissors" ||
		computer == "Paper"   && player == "Rock"     ||
		computer == "Scissors"&& player == "Paper"      ){
		return ["lose",player,computer];
	}
}
var idle=0 
var btnRock = document.querySelector('.btnRock');
var btnPaper = document.querySelector('.btnPaper');
var btnScissors = document.querySelector('.btnScissors');

btnRock.addEventListener("click",    function() { afterbuttonclick(playRound("Rock")); }  );
btnPaper.addEventListener("click",   function() { afterbuttonclick(playRound("Paper")) ; } );
btnScissors.addEventListener("click",function() { afterbuttonclick(playRound("Scissors"));});


function afterbuttonclick(game){
  clearTimeout(idle)
	let outcome = game[0];
	let playerpick = game[1];
	let computerpick = game[2];
	let gameStatus = "Computer picked " + computerpick;
	let msg = (outcome=="win") ? "You won!" : ((outcome == "tie")? "It's a tie" : "You lost");
	document.getElementById('g1').innerHTML = gameStatus;
	document.getElementById('g2').innerHTML = msg;
	idle = setTimeout(function(){
          	document.getElementById('g1').innerHTML = "";
          	document.getElementById('g2').innerHTML = "Take your pick";}
            ,2000);
}

