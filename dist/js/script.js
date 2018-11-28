'use strict'
document.onkeydown = keyPress; // при спуске клавишы в документе выполнить keyPress
var snake_position = []; //массив с координатами частей  змейки
var snake_position_number = []; //массив с номеропозицией частей змейки
var xMax = 15; // длина поля
var yMax = 8; // высота поля
var snake_position_first_X; // позиция Х головы змеи
var snake_position_first_Y; // позиция У головы змеи
var snake_positionX // массив с позициями  Х частей змеи
var snake_positionY // массив с позициями  У частей змеи
snake_position[0] = [3, 4]; // вводим координаты тела змеи
snake_position[1] = [4, 4]; // вводим координаты тела змеи
snake_position[2] = [5, 4]; // вводим координаты тела змеи
snake_position[3] = [6, 4]; // вводим координаты тела змеи
snake_position[4] = [7, 4]; // вводим координаты тела змеи
snake_position[5] = [8, 4]; // вводим координаты тела змеи
var cells = document.getElementsByClassName('cell'); //все ячейки поля
for(var i = 0; i < snake_position.length; i++) { // от [0 , 5] 
    snake_positionX = snake_position[i][0];
    snake_positionY = snake_position[i][1];
    var positionNumber = +xMax*(snake_positionY-1)+snake_positionX;
    snake_position_number[i] = +positionNumber;
    cells[snake_position_number[i]].classList.add('snake');
}

function keyPress() {
    for(var i = 0; i < snake_position.length; i++) {
        var k = 0;
        snake_positionX = snake_position[i][0];
        snake_positionY = snake_position[i][1];
        var positionNumber = +xMax*(snake_positionY-1)+snake_positionX;
        for(var i = 0; i < snake_position.length; i++) {
            var snake_positionX = snake_position[i][0];
            var snake_positionY = snake_position[i][1];
            var positionNumberTest = +xMax*(snake_positionY-1)+snake_positionX;
            if(positionNumber == positionNumberTest) {
                k++
            }
            if(k == 2) {
                gameover();
            }
        }
    }
    snake_position_first_X = snake_position[snake_position.length-1][0];
    snake_position_first_Y = snake_position[snake_position.length-1][1];
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
        snake_positionX = snake_position[i][0];
        snake_positionY = snake_position[i][1];
        var positionNumber = +xMax*(snake_positionY-1)+snake_positionX;
        snake_position_number[i] = +positionNumber;
        cells[snake_position_number[i]].classList.add('snake');
    }
}

function gameover() {
    alert("game over");
    for(var i = 0; i < snake_position.length; i++) {
        cells[snake_position_number[i]].classList.remove('snake');
    }
    snake_position = [];
}

function down() {
    if(snake_position_first_Y == yMax+1) {
        gameover();
    } 
    else {
        snake_position.push([snake_position_first_X , snake_position_first_Y+1]);
    }
}
function up() {
    if(snake_position_first_Y == 1) {
        gameover();
    }
    else {
        snake_position.push([snake_position_first_X , snake_position_first_Y-1]);
    }
}
function right() {
    if(snake_position_first_X == xMax-1) {
        gameover();
    }
    else {
        snake_position.push([snake_position_first_X+1 , snake_position_first_Y]);
    }
}
function left() {
    if(snake_position_first_X == 0) {
        gameover();
    }
    else {
        snake_position.push([snake_position_first_X-1 , snake_position_first_Y]);
    }
}