'use strict'

class Game {
  constructor(containerWidth, containerHeight) {
    this.containerWidth = containerWidth;
    this.containerHeight = containerHeight;
  }

  Start() {
  };
}

//soundtrack
let soundtrack = new Audio();
soundtrack.src = 'playback.wav';
soundtrack.loop = true;

//die sound
let dieSound = new Audio();
dieSound.src = 'DieSound.wav';

//bite sound
let biteSound = new Audio();
biteSound.src = 'bite.wav';


let g = new Game();

let gameWrapper = document.getElementById('gameWrapper');


/*  touch event   */

var initialPoint;
var finalPoint;
gameWrapper.addEventListener('touchstart', function (event) {
  event.preventDefault();
  event.stopPropagation();
  initialPoint = event.changedTouches[0];
}, false);
gameWrapper.addEventListener('touchend', function (event) {
  event.preventDefault();
  event.stopPropagation();
  finalPoint = event.changedTouches[0];
  let xTouch = finalPoint.pageX - initialPoint.pageX;
  let yTouch = finalPoint.pageY - initialPoint.pageY;
  let xTouchAbs = Math.abs(xTouch);
  let yTouchAbs = Math.abs(yTouch);
  console.log('xTouch',xTouch)
  console.log('yTouch',yTouch)
  console.log('xTouchAbs',xTouchAbs)
  console.log('yTouchAbs',yTouchAbs)
  if (xTouchAbs > yTouchAbs) {
    if (xTouch > 0) {
      direction = 'right';
    } else if (xTouch < 0) {
      direction = 'left';
    }
  } else if (yTouchAbs > xTouchAbs) {
    if (yTouch < 0) {
      direction = 'up';
    } else if (yTouch > 0) {
      direction = 'down';
    }
  }

  console.log(direction)

}, false);


document.onkeydown = keyPress; // при спуске клавишы в документе выполнить keyPress
var snake_position = []; //массив с координатами частей  змейки
var snake_position_number = []; //массив с номеропозицией частей змейки
var xMax = 16; // длина поля
var yMax = 24; // высота поля
let cellsHTML = "";
for(let i = 0; i < xMax * yMax; i ++) {
  cellsHTML += `<div class="cell"></div>`
}
gameWrapper.innerHTML = cellsHTML;
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
var cells = document.getElementsByClassName('cell');
let highscore;
if (localStorage.getItem('highscore')) {
  highscore = JSON.parse(localStorage.getItem('highscore'));
} else {
  highscore = [];
  localStorage.setItem('highscore', JSON.stringify(highscore));
}

let userName;
if (localStorage.getItem('userName')) {
  userName = localStorage.getItem('userName');
  $('#userName').val(userName);
} else {
  userName = "Mystery user";
  $('#userName').val(userName);
}
var start = document.getElementById('btn-start');
start.addEventListener("click", ()=> {
  getStart();
})

$('#userName').focusout(() => {
  localStorage.setItem('userName', $('#userName').val());
userName = localStorage.getItem('userName');
})


let name;

function getStart() {
  if (onOff == 0) {
    onOff = 1;
    userName = $('#userName').val();
    start.innerHTML = `<i class="fas fa-stop"></i>`;
    if (typeof dieSound === 'function') {
      dieSound.stop()
    }
    soundtrack.play();
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
    snake_position = [[2, 4], [3, 4], [4, 4]]; // вводим координаты тела змеи
    for (var i = 0; i < snake_position.length; i++) { // от [0 , 5]
      snake_positionX = snake_position[i][0];//на каждую итерацию выводит Х и У каждой части змеи
      snake_positionY = snake_position[i][1];
      var positionNumber = +xMax * (snake_positionY - 1) + snake_positionX; // считает номеропозицию каждой части
      snake_position_number[i] = +positionNumber; // добовляем в массив
      cells[snake_position_number[i]].classList.add('snake-body'); //каждому элементу массива добовляет класс снейк
    }
    autoGo();
    apple();
  } else {
    onOff = 0;
    start.innerHTML = `<i class="fas fa-play"></i>`;
    gameover();
  }
}

//авто ход
function autoGo() {
  timerId = setInterval(function () {
    hannibal();
    snake_position_first_X = snake_position[snake_position.length - 1][0];
    snake_position_first_Y = snake_position[snake_position.length - 1][1];
    snake_position_first = +xMax * (snake_position_first_Y - 1) + snake_position_first_X;
    if (direction == 'right') {
      right();
    }
    if (direction == 'left') {
      left();
    }
    if (direction == 'up') {
      up();
    }
    if (direction == 'down') {
      down();
    }
    cells[snake_position_number[0]].classList.remove('snake-body');

    for (var i = 0; i < snake_position.length; i++) { // от [0 , 5]
      snake_positionX = snake_position[i][0];//на каждую итерацию выводит Х и У каждой части змеи
      snake_positionY = snake_position[i][1];
      var positionNumber = +xMax * (snake_positionY - 1) + snake_positionX; // считает номеропозицию каждой части
      snake_position_number[i] = +positionNumber; // добовляем в массив
      cells[snake_position_number[i]].classList.add('snake-body'); //каждому элементу массива добовляет класс снейк
    }

  }, speed)
}

// яблоко
function apple() {
  apple_position_X = Math.round(Math.random() * (xMax - 1));
  apple_position_Y = Math.round(Math.random() * (yMax - 1));
  apple_position = +xMax * (apple_position_Y+1) + apple_position_X+1;
  console.group("x / y / pos number")
  console.log(apple_position_X)
  console.log(apple_position_Y)
  console.log(apple_position)
  console.groupEnd()
  for (var i = 0; i < snake_position_number.length; i++) {
    var opt1 = snake_position_number[i];
    if (apple_position == opt1) {
      apple();
    }
  }
  cells[apple_position].classList.add('cherry');
}

// чтоб себя не кусал
function hannibal() { //rewrite
  for (var i = 0; i < snake_position_number.length; i++) {
    var k = 0;
    var opt1 = snake_position_number[i];
    for (var j = 0; j < snake_position_number.length; j++) {
      var opt2 = snake_position_number[j];
      if (opt1 == opt2) {
        k++;
      }
    }
    if (k > 1) {
      gameover();
      break;
    }
  }
}

//arrows
function keyPress() {
  var event = window.event;
  if (event.which == 37) {
    if (direction != "right") {
      direction = 'left';
    }
  }
  if (event.which == 38) {
    if (direction != 'down') {
      direction = 'up';
    }
  }
  if (event.which == 39) {
    if (direction != 'left') {
      direction = 'right';
    }
  }
  if (event.which == 40) {
    if (direction != 'up') {
      direction = 'down';
    }
  }
}

//гейм овер
function gameover() {
  setTimeout(function () {
    clearInterval(timerId);
    soundtrack.pause();
    start.innerHTML = `<i class="fas fa-play"></i>`;
    dieSound.play();
    $.post("write_highscore.php", {name: userName, score: point});
    highscore.push(point);
    localStorage.setItem("highscore", JSON.stringify(highscore))
  }, 1);
  cells[apple_position].classList.remove('apple', 'cherry', 'egg');
  for (var i = 0; i < snake_position.length; i++) {
    cells[snake_position_number[i]].classList.remove('snake-body');
  }
  snake_position = [];
  snake_position_number = [];
  onOff = 0;

  // highScore.push(point);
  // showHighScore()
}

// function showHighScore() {
//     var fir, sec, trd;
// }
//движение змеи
function down() {
  if (snake_position_first_Y > yMax - 1) {
    gameover();
  } else {
    snake_position.push([snake_position_first_X, snake_position_first_Y + 1]);
    if (snake_position_first == apple_position) { //apple eat
      biteSound.play();
      point++;
      points.innerHTML = point;
      cells[apple_position].classList.remove('cherry', 'egg', 'apple');
      apple();
    } else {
      snake_position.shift();
    }
  }
}

function up() {
  if (snake_position_first_Y == 1) {
    gameover();
  } else {
    snake_position.push([snake_position_first_X, snake_position_first_Y - 1]);
    if (snake_position_first == apple_position) { //apple eat
      biteSound.play();
      point++;
      points.innerHTML = point;
      cells[apple_position].classList.remove('cherry', 'egg', 'apple');
      apple();
    } else {
      snake_position.shift();
    }
  }
}

function right() {
  if (snake_position_first_X >= xMax - 1) {
    gameover();
  } else {
    snake_position.push([snake_position_first_X + 1, snake_position_first_Y]);
    if (snake_position_first == apple_position) { //apple eat
      biteSound.play();
      point++;
      points.innerHTML = point;
      cells[apple_position].classList.remove('cherry', 'egg', 'apple');
      apple();
    } else {
      snake_position.shift();
    }
  }
}

function left() {
  if (snake_position_first_X <= 0) {
    gameover();
  } else {
    snake_position.push([snake_position_first_X - 1, snake_position_first_Y]);
    if (snake_position_first == apple_position) { //apple eat
      biteSound.play();
      point++;
      points.innerHTML = point;
      cells[apple_position].classList.remove('cherry', 'egg', 'apple');
      apple();
    } else {
      snake_position.shift();
    }
  }
}



