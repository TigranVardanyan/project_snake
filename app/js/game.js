'use strict'
// class Game {
//   constructor(containerWidth,containerHeight) {
//     this.containerWidth = containerWidth;
//     this.containerHeight = containerHeight;
//   }
//
//   Start() {
//
//   };
//
// }
//
// class Snake {
//   EateSound() {
//     let audio = new Audio(); // New Audio element
//     audio.src = 'hb17.wav'; // path
//     audio.autoplay = true; // autoplay
//   }
//   GetStart() {
//     if(onOff == 0) {
//       if (rb1.checked) {
//         speed = rb1.value;
//       }
//       if (rb2.checked) {
//         speed = rb2.value;
//       }
//       if (rb3.checked) {
//         speed = rb3.value;
//       }
//       direction = 'right';
//       point = 0;
//       points.innerHTML = '0';
//       snake_position[0] = [3, 4]; // вводим координаты тела змеи
//       snake_position[1] = [4, 4]; // вводим координаты тела змеи
//       snake_position[2] = [5, 4]; // вводим координаты тела змеи
//       snake_position[3] = [6, 4]; // вводим координаты тела змеи
//       snake_position[4] = [7, 4]; // вводим координаты тела змеи
//       snake_position[5] = [8, 4]; // вводим координаты тела змеи
//       for(var i = 0; i < snake_position.length; i++) { // от [0 , 5]
//         snake_positionX = snake_position[i][0];//на каждую итерацию выводит Х и У каждой части змеи
//         snake_positionY = snake_position[i][1];
//         var positionNumber = +xMax*(snake_positionY-1)+snake_positionX; // считает номеропозицию каждой части
//         snake_position_number[i] = +positionNumber; // добовляем в массив
//         cells[snake_position_number[i]].classList.add('snake'); //каждому элементу массива добовляет класс снейк
//       }
//       autoGo();
//       apple();
//       onOff = 1;
//     } else {
//       onOff = 0;
//     }
//   }
// }

let gameWrapper = document.getElementById('gameWrapper');



/*  touch event   */

var initialPoint;
var finalPoint;
gameWrapper.addEventListener('touchstart', function(event) {
  event.preventDefault();
  event.stopPropagation();
  initialPoint=event.changedTouches[0];
}, false);
gameWrapper.addEventListener('touchend', function(event) {
  event.preventDefault();
  event.stopPropagation();
  finalPoint=event.changedTouches[0];
  let xTouch = finalPoint.pageX - initialPoint.pageX;
  let yTouch = finalPoint.pageY - initialPoint.pageY;
  let xTouchAbs = Math.abs(xTouch);
  let yTouchAbs = Math.abs(yTouch);
  if (xTouchAbs > yTouchAbs) {
    if (xTouch < 0) {
      direction = 'right';
    } else if (xTouch > 0) {
      direction = 'left';
    }
  } else if (yTouchAbs > xTouchAbs) {
    if (yTouch < 0) {
      direction = 'down';
    } else if (yTouch > 0) {
      direction = 'up';
    }
  }
  // console.group("x-y");
  // console.log("x " + xTouch);
  // console.log("y " + yTouch);
  // console.groupEnd('x-y');

  console.log(direction)

}, false);





document.onkeydown = keyPress; // при спуске клавишы в документе выполнить keyPress
var snake_position = []; //массив с координатами частей  змейки
var snake_position_number = []; //массив с номеропозицией частей змейки
var xMax = 8; // длина поля
var yMax = 12; // высота поля
var snake_position_first_X; // позиция Х головы змеи
var snake_position_first_Y; // позиция У головы змеи
var snake_position_first; // позиция головы
var snake_positionX // массив с позициями  Х частей змеи
var snake_positionY // массив с позициями  У частей змеи
var direction;
var speed = 350;
var rb1 = document.getElementById('radio1');
var rb2 = document.getElementById('radio2');
var rb3 = document.getElementById('radio3');
var rb4 = document.getElementById('radio4');
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




function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'hb17.wav'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}


function getStart() {
    if(onOff == 0) {
        if (rb1.checked) {
            speed = rb1.value;
        } else if (rb2.checked) {
            speed = rb2.value;
        } else if (rb3.checked) {
            speed = rb3.value;
        } else if (rb4.checked) {
          speed = rb4.value;
        }
        direction = 'right';
        point = 0;
        points.innerHTML = '0';
        snake_position[0] = [2, 4]; // вводим координаты тела змеи
        snake_position[1] = [3, 4]; // вводим координаты тела змеи
        snake_position[2] = [4, 4]; // вводим координаты тела змеи
        // snake_position[3] = [5, 4]; // вводим координаты тела змеи
        // snake_position[4] = [6, 4]; // вводим координаты тела змеи
        //snake_position[4] = [7, 4]; // вводим координаты тела змеи
        // snake_position[5] = [8, 4]; // вводим координаты тела змеи
        for(var i = 0; i < snake_position.length; i++) { // от [0 , 5]
        snake_positionX = snake_position[i][0];//на каждую итерацию выводит Х и У каждой части змеи
        snake_positionY = snake_position[i][1];
        var positionNumber = +xMax*(snake_positionY-1)+snake_positionX; // считает номеропозицию каждой части
        snake_position_number[i] = +positionNumber; // добовляем в массив
        cells[snake_position_number[i]].classList.add('sneak-body'); //каждому элементу массива добовляет класс снейк
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
        cells[snake_position_number[0]].classList.remove('sneak-body');

        for(var i = 0; i < snake_position.length; i++) { // от [0 , 5]
            snake_positionX = snake_position[i][0];//на каждую итерацию выводит Х и У каждой части змеи
            snake_positionY = snake_position[i][1];
            var positionNumber = +xMax*(snake_positionY-1)+snake_positionX; // считает номеропозицию каждой части
            snake_position_number[i] = +positionNumber; // добовляем в массив
            cells[snake_position_number[i]].classList.add('sneak-body'); //каждому элементу массива добовляет класс снейк
        }
        hannibal();
    }, speed)
}

// яблоко
function apple() {
    apple_position_X = Math.round(Math.random()*8);
    apple_position_Y = Math.round(Math.random()*12);
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
    if(event.which == 37) {
        direction = 'left';
    }
    if(event.which == 38) {
        direction = 'up';
    }
    if(event.which == 39) {
        direction = 'right';
    }
    if(event.which == 40) {
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
    // highScore.push(point);
    // showHighScore()
}

// function showHighScore() {
//     var fir, sec, trd;
// }
//движение змеи
function down() {
    if(snake_position_first_Y > yMax-1) {
        gameover();
    }
    else {
        snake_position.push([snake_position_first_X , snake_position_first_Y+1]);
        if(snake_position_first == apple_position) { //apple eat
            soundClick();
            point++;
            points.innerHTML = point;
            cells[apple_position].classList.remove('apple');
            apple();
        } else {
            snake_position.shift();
        }
    }
}
function up() {
    if(snake_position_first_Y == 1) {
        gameover();
    }
    else {
        snake_position.push([snake_position_first_X , snake_position_first_Y-1]);
        if(snake_position_first == apple_position) { //apple eat
            soundClick();
            point++;
            points.innerHTML = point;
            cells[apple_position].classList.remove('apple');
            apple();
        } else {
            snake_position.shift();
        }
    }
}
function right() {
    if(snake_position_first_X >= xMax-1) {
        gameover();
    }
    else {
        snake_position.push([snake_position_first_X+1 , snake_position_first_Y]);
        if(snake_position_first == apple_position) { //apple eat
            soundClick();
            point++;
            points.innerHTML = point;
            cells[apple_position].classList.remove('apple');
            apple();
        } else {
            snake_position.shift();
        }
    }
}
function left() {
    if(snake_position_first_X <= 0) {
        gameover();
    }
    else {
        snake_position.push([snake_position_first_X-1 , snake_position_first_Y]);
        if(snake_position_first == apple_position) { //apple eat
            soundClick();
            point++;
            points.innerHTML = point;
            cells[apple_position].classList.remove('apple');
            apple();
        } else {
            snake_position.shift();
        }
    }
}



