
let myTime;

function startTime () {
	let i = +document.getElementById("time").innerText;
	myTime = setInterval(myTimer, 1000);
	function myTimer () {
		if (i <= 30) {
			time.innerHTML = i++;
		} else {
			stopTimer(myTime);
		};
	};
};

function stopTime () {
	clearTimeout(myTime);
};

function clearTime () {
	clearInterval(myTime);
	time.innerHTML = 1;
};