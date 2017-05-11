var artists = ["DRAM", "KAMAYIAH", "ANDERSONPAAK", "BIGBOI", "DONMONIQUE", "GOLDLINK"];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var number = getRandomInt(0,5);

var answer = artists[number];

var length = answer.length;

window.onload = function(){
	if (answer.length === 4) {
		var div = document.getElementById('spaces');

		div.innerHTML = '_ _ _ _';
	}

	else if (answer.length === 6) {
		var div = document.getElementById('spaces');

		div.innerHTML = '_ _ _ _ _ _';
	}

	else if (answer.length === 8) {
		var div = document.getElementById('spaces');

		div.innerHTML = '_ _ _ _ _ _ _ _';
	}

	else if (answer.length === 9) {
		var div = document.getElementById('spaces');

		div.innerHTML = '_ _ _ _ _ _ _ _ _';
	}

	else if (answer.length === 12) {
		var div = document.getElementById('spaces');

		div.innerHTML = '_ _ _ _ _ _ _ _ _ _ _ _';
	}
}

var input;

function guess() {
    input = document.getElementById("letter").value;
    if (answer.includes(input))

}
