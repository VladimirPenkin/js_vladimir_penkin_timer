
let myTime;

function startTime () {
	let i = +document.getElementById("time").innerText;
	myTime = setInterval(myTimer, 1000);
	function myTimer () {
		if (i <= 30) {
			time.innerHTML = i++;
		} else {
			stopTimer(myTime);
		}
	}
}

function stopTime () {
	clearTimeout(myTime);
}

function clearTime () {
	clearInterval(myTime);
	time.innerHTML = 1;
}

// let count = 1;
// let count = 30;
// var startTimer;

// function startMyTimer() {
//     stopTimer();
//     startTimer= setInterval(function(){
//         // if (count < 31) {
//         if (count > 0) {
//             document.getElementById('time').innerHTML = count;
//             // count++
//             count--
//         } else {
//             stopTimer(startTimer);
//         }
//     }, 1000);
// }

// function stopTimer() {
//     clearInterval(startTimer);
// }

// function reset() {
//     // count = 1;
//     count = 30;
//     document.getElementById('time').innerHTML = count;
// }

// startMyTimer();






