document.onkeydown = keyPress; // при спуске клавишы в документе выполнить keyPress

var x1 = 0, y1 = 0;
var snakePosition = []; // массив с точками позиции всех частей змейки
var cells = document.getElementsByClassName('cell'); //все ячейки
snakePosition.push([8 , 5]); //начальная точка
var x = (snakePosition[0])[0]; // координата х
var y = (snakePosition[0])[1]; // координата у
var posNumber = (y-1)*15+x; // формула подсчета позиционного номера
var lastPosNumber = 0; //
cells[posNumber-1].style.backgroundColor = "red"; // красит первую точку



// alert(snakePosition[0]);
var green = window.getComputedStyle( document.getElementsByClassName('test')[0] ,null).getPropertyValue('background-color');
function keyPress() {
	var k = 0;
	var foodPos = 0;
    var event = window.event; //ловит эвент, пока не ясно как //уже ясно
    var x = (snakePosition[0])[0]; // координата х
    var y = (snakePosition[0])[1]; // координата у
    //работает же при функции keyPress а та только на onkeydown срабатывает
    for(let i = 0; i<134; i++) {
    	if(window.getComputedStyle( document.getElementsByClassName('cell')[i] ,null).getPropertyValue('background-color') == green) {
    		k++;
    		foodPos = i;
    	}	
    }
    if(k == 0) {
    		cells[randFood()].style.backgroundColor = "green";
    	}
    lastPos = snakePosition[snakePosition.length - 1];
    x1 = lastPos[0]; // принимают старые значения (до смены)
    y1 = lastPos[1]; // принимают старые значения
    // console.log(event.keyCode)
    if(event.keyCode == 37) { // левая стрелка
    	if(x == 1) {
    		x = 15;
    	}
    	else {
    		x = --x;
    	}
    }
    if (event.keyCode == 38) { //вверх
    	if(y == 1) {
    		y = 9;
    	}
    	else {
    		y = --y;
    	}
    }
    if (event.keyCode == 39) { //правая
    	if(x == 15) {
    		x = 1;
    	}
    	else {
    		x = ++x;
    	}
    }
    if (event.keyCode == 40) { // в низ
    	if(y == 9) {
    		y = 1;
    	}
    	else {
    		y = ++y;
    	}
    }
    snakePosition[0] = [x,y]
    lastPosNumber = (y1-1)*15+x1; // позиционный номер до движения
    posNumber = (y-1)*15+x; // находит новый
    if(posNumber-1 == foodPos) { // ловит эвент когда змейка ест пищу
    	alert('hey!!')
    }
    cells[lastPosNumber-1].style.backgroundColor = "white"; // стирает старый
    cells[posNumber-1].style.backgroundColor = "red"; // задает бек
};

function randFood() {
	let i = Math.round((Math.random()*134));
	if(i == posNumber) {
		randFood()
	}
	else {
		for(let j=0; j < 136; j++) {
			let color = cells[68].style.backgroundColor;
			if( color != "green") {
				return +i;
		    }
		}
	}
}



// alert();