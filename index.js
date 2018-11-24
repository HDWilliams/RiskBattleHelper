
function calcResults(){
	//extracts dice rolls

	let aArmies = document.querySelector('#aArmies').value;
	const aDie = document.querySelector('#aDie').value;
	let dArmies = document.querySelector('#dArmies').value;
	const dDie = document.querySelector('#dDie').value;

	calcDiceRoll(aArmies, aDie, dArmies, dDie);

};

function calcDiceRoll(aArmies, aDie, dArmies, dDie){
	//calculate numbers each player rolls and stores them in an array
	let attackerDie = [];
	let defenderDie = [];


	for (i=0; i<aDie; i++){
		attackerDie.push(Math.floor((Math.random() * 6) + 1));
	};

	for (i=0; i<dDie; i++){
		defenderDie.push(Math.floor((Math.random() * 6) + 1));
	};

	attackerDie.sort(function(a, b){return b - a});
	defenderDie.sort(function(a, b){return b - a});
	calcWins(attackerDie, defenderDie, aArmies, dArmies, aDie, dDie);
};

function calcWins(attackerDie, defenderDie, aArmies, dArmies, aDie, dDie){
	//compare dice values and calculate battle wins
	let attackerWins = 0;
	let defenderWins = 0;
	for (i=0; i<defenderDie.length; i++){
		if (attackerDie[i] > defenderDie[i]){
			attackerWins = attackerWins + 1;
		} else{
			defenderWins = defenderWins + 1;
		}
	}
	calcLosses(aArmies, dArmies, attackerWins, defenderWins, aDie, dDie)
}

function calcLosses(aArmies, dArmies, attackerWins, defenderWins, aDie, dDie){
	aArmies = aArmies - defenderWins;
	dArmies = dArmies - attackerWins;
	if (aArmies===1){
		alert(`The Attacker has lost. Attacker Armies: ${aArmies}. Defender Armies: ${dArmies}`)
	} else if (dArmies===0){
		alert(`The Defender has lost. Attacker Armies: ${aArmies}. Defender Armies: ${dArmies}`)
	} else{
		//reduce the number of die if it exceeds number of armies remaining
		
		calcDiceRoll(aArmies, aDie, dArmies, dDie);
	}
};
document.querySelector('#submitForm1').addEventListener("click", function(event){
	event.preventDefault();
	calcResults();
}, false);
