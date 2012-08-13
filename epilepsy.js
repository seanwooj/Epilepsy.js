/*---------------------------------------------------------------------------------------------------------------------------
Annoying.js
Info : A small script to induce seizures and/or extreme annoyance.
Requires : jQuery
Author : seanWooj
Version : 1

How to use this script:
Insert this in a <script type="text/javascript"></script>
$(document).ready(randoBG(cycleTime,targetDiv));
where cycleTime is the amount of milliseconds that you want the cycle to last and targetDiv is the div you'd like to target.

Also, don't forget to call annoying.js -- <script src="directory/annoying.js"></script>
---------------------------------------------------------------------------------------------------------------------------*/

//array with all units in a hexidecimal array
var hexadecimal = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];

//function to return a number between 0 and 16
function randomSixteen(){
	return Math.floor(Math.random()*16);
}

function randoBG(cycleTime, target) {
	//create empty array for hexcode
	var hexcode = [];
	var time = cycleTime;
	var tgt = target;

	//fill hexcode array with hex digits
	for(i=0;i<6;i++){
		hexcode[i] = hexadecimal[randomSixteen()];
	}

	console.log(hexcode);

	//create a hexcodeString variable as an empty string
	var hexcodeString ="";

	//concatenate one through six into one variable
	for(i=0;i<6;i++){
		hexcodeString = hexcodeString + hexcode[i];
		console.log(hexcodeString);
	}

	$(target).css({'background-color':hexcodeString});

	window.setTimeout(function(){randoBG(cycleTime, target)},cycleTime); //This will reload the randoBG function for the amount of time called in setTimeout.
}

