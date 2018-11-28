'use strict'

document.onkeydown = keyPress; // при спуске клавишы в документе выполнить keyPress

var snake_position = [];
var snake_position_number = [];
var position_once = 0;
var xMax = 15;
var yMax = 8;
snake_position[0] = [3, 4];
snake_position[1] = [4, 4];
snake_position[2] = [5, 4];
snake_position[3] = [6, 4];
var cells = document.getElementsByClassName('cell'); //все ячейки

for(var i = 0; i < snake_position.length; i++) {
    var snake_positionX = snake_position[i][0];
    var snake_positionY = snake_position[i][1];
    var positionNumber = +xMax*(snake_positionY-1)+snake_positionX;
    snake_position_number[i] = +positionNumber;
    cells[snake_position_number[i]].classList.add('snake');
}




function keyPress() {
    var event = window.event;
    if(event.keyCode == 37) {
        left();
    }
    if(event.keyCode == 38) {
        up();
    }
    if(event.keyCode == 39) {
        right();
    }
    if(event.keyCode == 40) {
        down();
    }
    cells[snake_position_number[0]].classList.remove('snake');
    snake_position.shift();
    for(var i = 0; i < snake_position.length; i++) {
        var snake_positionX = snake_position[i][0];
        var snake_positionY = snake_position[i][1];
        var positionNumber = +xMax*(snake_positionY-1)+snake_positionX;
        snake_position_number[i] = +positionNumber;
        cells[snake_position_number[i]].classList.add('snake');
    }
}

function down() {
    snake_position.push([snake_position[snake_position.length-1][0] , snake_position[snake_position.length-1][1]+1] );
}
function up() {
    snake_position.push([snake_position[snake_position.length-1][0] , snake_position[snake_position.length-1][1]-1] );
}
function right() {
    snake_position.push([snake_position[snake_position.length-1][0]+1 , snake_position[snake_position.length-1][1]] );
}
function left() {
    snake_position.push([snake_position[snake_position.length-1][0]-1 , snake_position[snake_position.length-1][1]] );
}