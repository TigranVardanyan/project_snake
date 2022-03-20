import Playlist from "./Playlist.js";

export default class Game {
  ctx = null;
  audio = null;
  currentPosition = [];
  snackPosition = [];
  direction = 'right'
  cell = 10;
  /**
   * Game ctor.
   * @constructor
   * @param {string} playgroundWrapper - playground wrapper's id
   * @param {number} speed - snake speed
   * @param {number} snack - snack type todo
   * @param {number} xCells - width in cells
   * @param {number} yCells - height in cells
   */
  constructor( playgroundWrapper = 'playgroundWrapper', speed = 500, snack = 0, xCells = 32, yCells = 48 ) {
    //singleton
    if ( Game._instance ) {
      return Game._instance
    }
    Game._instance = this;
    console.log('Game ctor');
    this.playgroundWrapper = document.getElementById('playgroundWrapper')
    this.speed = speed;
    this.snack = snack;
    this.xCells = xCells;
    this.yCells = yCells;
    this.setUpAudio();
    this.buildPlayground(this.xCells, this.yCells)
    //this.drawTest()
    this.prepareSession()
  }

  setUpAudio = () => {
    let audio = [];
    audio['soundTrack'] = new Audio('assets/playback.wav');
    audio['dieSound'] = new Audio('assets/dieSound.wav');
    audio['biteSound'] = new Audio('assets/bite.wav');

    this.audio = new Playlist(audio)
    window.audio = this.audio;
  }

  /*
  * @param {number} width
  * @param {number} height
   */
  buildPlayground = ( width, height ) => {
    const canvas = document.createElement('canvas')
    canvas.width = this.cell * width;
    canvas.height = this.cell * height;
    this.ctx = canvas.getContext("2d");
    this.playgroundWrapper.append(canvas);
  }
  drawTest = () => {
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(200, 100);
    this.ctx.stroke();
  }
  finishGame = () => {
    this.playgroundWrapper.innerHTML = ''
    delete Game._instance;
    delete this;
  }
  prepareSession = () => {
    this.currentPosition = [50, 50];
    this.snackRespawn(this.xCells * this.cell, this.yCells * this.cell)
    setInterval(this.step.bind(null, this.direction), this.speed)
    document.onkeydown = this.handleKeydownEvent
    //this.audio.play('soundTrack', true)
  }
  handleKeydownEvent = ( event ) => {
    let keyCode;
    if ( event == null ) {
      keyCode = window.event.keyCode;
    }
    else {
      keyCode = event.keyCode;
    }
    switch ( keyCode ) {
      // left
      case 37:
        this.direction = 'left'
        break;
      // right
      case 39:
        this.direction = 'right'
        break;
      // up
      case 38:
        this.direction = 'up'
        break;
      // down
      case 40:
        this.direction = 'down'
        break;
      default:
        break;
    }
    //this.step(this.direction) // uncomment this for manual walking
    //console.log(this.direction);
  }
  snackRespawn = (width, height) => {
    let snack_position_X = Math.round(Math.random() * width);
    snack_position_X = snack_position_X - snack_position_X % this.cell; //for match with snake position
    let snack_position_Y = Math.round(Math.random() * height);
    snack_position_Y = snack_position_Y - snack_position_Y % this.cell; //for match with snake position
    this.snackPosition = [snack_position_X, snack_position_Y];
  }

  renderPlayground = () => {
    this.ctx.clearRect(0,0,this.xCells * this.cell, this.yCells * this.cell);
    this.ctx.fillStyle = "rgb(0,240,100)";
    this.ctx.fillRect(this.currentPosition[0], this.currentPosition[1], this.cell, this.cell);
    this.ctx.fillStyle = "rgb(255,0,0)";
    this.ctx.fillRect(this.snackPosition[0], this.snackPosition[1], this.cell, this.cell);
  }

  step = () => {
    //console.log('this.direction - ' + this.direction);
    switch ( this.direction ) {
      case 'left':
        this.currentPosition = [this.currentPosition[0] - this.cell, this.currentPosition[1]]
        break;
      case 'right':
        this.currentPosition = [this.currentPosition[0] + this.cell, this.currentPosition[1]]
        break;
      case 'up':
        this.currentPosition = [this.currentPosition[0], this.currentPosition[1] - this.cell]
        break;
      case 'down':
        this.currentPosition = [this.currentPosition[0], this.currentPosition[1] + this.cell]
        break;
      default:
        break;
    }
    this.renderPlayground();
  }
}