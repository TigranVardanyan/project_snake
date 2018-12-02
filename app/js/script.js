'use strict'
document.onkeydown = keyPress; // при спуске клавишы в документе выполнить keyPress
var snake_position = []; //массив с координатами частей  змейки
var snake_position_number = []; //массив с номеропозицией частей змейки
var xMax = 15; // длина поля
var yMax = 8; // высота поля
var snake_position_first_X; // позиция Х головы змеи
var snake_position_first_Y; // позиция У головы змеи
var snake_position_first; // позиция головы
var snake_positionX // массив с позициями  Х частей змеи
var snake_positionY // массив с позициями  У частей змеи
var direction ;
var speed = 200;
var apple_position;
var apple_position_X;
var apple_position_Y;
var onOff = 0;
var timerId;
var point;
var points = document.getElementById('points'); 
var cells = document.getElementsByClassName('cell'); //все ячейки поля
var start = document.getElementById('start');
start.addEventListener("click" , getStart)

function getStart() {
    if(onOff == 0) {
        direction = 'right';
        point = 0;
        points.innerHTML = '0';
        snake_position[0] = [3, 4]; // вводим координаты тела змеи
        snake_position[1] = [4, 4]; // вводим координаты тела змеи
        snake_position[2] = [5, 4]; // вводим координаты тела змеи
        snake_position[3] = [6, 4]; // вводим координаты тела змеи
        snake_position[4] = [7, 4]; // вводим координаты тела змеи
        snake_position[5] = [8, 4]; // вводим координаты тела змеи
        for(var i = 0; i < snake_position.length; i++) { // от [0 , 5] 
        snake_positionX = snake_position[i][0];//на каждую итерацию выводит Х и У каждой части змеи
        snake_positionY = snake_position[i][1];
        var positionNumber = +xMax*(snake_positionY-1)+snake_positionX; // считает номеропозицию каждой части
        snake_position_number[i] = +positionNumber; // добовляем в массив
        cells[snake_position_number[i]].classList.add('snake'); //каждому элементу массива добовляет класс снейк
    }
        autoGo();
        apple();
        onOff = 1;
    } else {
        onOff = 0;
    }
}

//авто ход
function autoGo() {
    timerId = setInterval(function() {
        snake_position_first_X = snake_position[snake_position.length-1][0];
        snake_position_first_Y = snake_position[snake_position.length-1][1];
        snake_position_first = +xMax*(snake_position_first_Y-1)+snake_position_first_X;
        if( direction == 'right') {
            right();
        }
        if( direction == 'left') {
            left();
        }
        if( direction == 'up') {
            up();
        }
        if( direction == 'down') {
            down();
        }
        cells[snake_position_number[0]].classList.remove('snake');
        if(snake_position_first == apple_position) { //apple eat
            point++;
            points.innerHTML = point;
            cells[apple_position].classList.remove('apple');
            apple();
        } else {
            snake_position.shift();
        }
        for(var i = 0; i < snake_position.length; i++) { // от [0 , 5] 
            snake_positionX = snake_position[i][0];//на каждую итерацию выводит Х и У каждой части змеи
            snake_positionY = snake_position[i][1];
            var positionNumber = +xMax*(snake_positionY-1)+snake_positionX; // считает номеропозицию каждой части
            snake_position_number[i] = +positionNumber; // добовляем в массив
            cells[snake_position_number[i]].classList.add('snake'); //каждому элементу массива добовляет класс снейк
        }
        hannibal();
    }, speed)
}

// яблоко 
function apple() {
    apple_position_X = Math.round(Math.random()*14);
    apple_position_Y = Math.round(Math.random()*8+1);
    apple_position = +xMax*(apple_position_Y-1)+apple_position_X;
    for(var i = 0; i < snake_position_number.length; i++) {
        var opt1 = snake_position_number[i];
        if(apple_position == opt1) {
            apple();
        }
    }
    cells[apple_position].classList.add('apple');
}

// чтоб себя не кусал
function hannibal() {
    for(var i = 0; i < snake_position_number.length; i++) {
        var k = 0;
        var opt1 = snake_position_number[i];
        for(var j = 0; j < snake_position_number.length; j++) {
            var opt2 = snake_position_number[j];
            if(opt1 == opt2) {
                k++;
            }
        }   
        if(k > 1) {
            gameover();
            break;
        }
    }
}
//обработчик стрелок
function keyPress() {
    var event = window.event;
    if(event.keyCode == 37) {
        direction = 'left';
    }
    if(event.keyCode == 38) {
        direction = 'up';
    }
    if(event.keyCode == 39) {
        direction = 'right';
    }
    if(event.keyCode == 40) {
        direction = 'down';
    }
}
//гейм овер
function gameover() {
    setTimeout(function() {
      clearInterval(timerId);
      alert( 'game over' );
    }, 1);
    cells[apple_position].classList.remove('apple');
    for(var i = 0; i < snake_position.length; i++) {
        cells[snake_position_number[i]].classList.remove('snake');
    }
    snake_position = [];
    onOff = 0;
}
//движение змеи
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