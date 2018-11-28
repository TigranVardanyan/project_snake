document.onkeydown = keyPress;

var x1 = 0, y1 = 0;
var snakePosition = [];
snakePosition.push([8 , 5]);


// alert(snakePosition[0]);

var cells = document.getElementsByClassName('cell');

var x = (snakePosition[0])[0];
var y = (snakePosition[0])[1];


var posNumber = (y-1)*15+x;
var lastPosNumber = 0;

cells[posNumber-1].style.backgroundColor = "red";


document.onkeydown = keyPress;

function keyPress() {
    var event = window.event;
    x1 = x;
    y1 = y
    // console.log(event.keyCode)
    if(event.keyCode == 37) {
    	if(x == 1) {
    		x = 15;
    	}
    	else {
    		x = --x;
    	}
    }
    if (event.keyCode == 38) {
    	if(y == 1) {
    		y = 9;
    		// if (x == 15) {
    		// 	x = 15;
    		// }
    	}
    	else {
    		y = --y;
    	}
    }
    if (event.keyCode == 39) {
    	if(x == 15) {
    		x = 1;
    	}
    	else {
    		x = ++x;
    	}
    }
    if (event.keyCode == 40) {
    	if(y == 9) {
    		y = 1;
    	}
    	else {
    		y = ++y;
    	}
    }
    lastPosNumber = (y1-1)*15+x1;
    cells[lastPosNumber-1].style.backgroundColor = "white";
    posNumber = (y-1)*15+x;
    cells[posNumber-1].style.backgroundColor = "red";

};