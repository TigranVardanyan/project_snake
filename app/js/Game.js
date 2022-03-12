export default class Game {
  ctx = null;
  currentPosition = [];
  cell = 10;
  constructor( playgroundWrapper = 'playgroundWrapper', speed, target, containerWidth = 32, containerHeight = 48 ) {
    //singleton
    if ( Game._instance ) {
      return Game._instance
    }
    Game._instance = this;
    console.log('Game ctor');
    this.playgroundWrapper = document.getElementById('playgroundWrapper')
    this.speed = speed;
    this.target = target;
    this.containerWidth = containerWidth;
    this.containerHeight = containerHeight;
    this.setUpAudio();
    this.buildPlayground(this.containerWidth, this.containerHeight)
    //this.drawTest()
    this.prepareSession()
  }

  setUpAudio = () => {
    this.audio = [];
    this.audio['soundtrack'] = new Audio('assets/playback.wav');
    this.audio['dieSound'] = new Audio('assets/dieSound.wav');
    this.audio['biteSound'] = new Audio('assets/bite.wav');
  }
  buildPlayground = ( width, heigth ) => {
    const canvas = document.createElement('canvas')
    canvas.width = this.cell * width;
    canvas.height = this.cell * heigth;
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
    this.ctx.fillStyle = "rgb(0,240,100)";
    this.currentPosition = [50, 50];
    this.ctx.fillRect(this.currentPosition[0], this.currentPosition[1], this.cell, this.cell);
    document.onkeydown = this.handleKeydownEvent
  }
  handleKeydownEvent = ( event ) => {
    var keyCode;
    if ( event == null ) {
      keyCode = window.event.keyCode;
    }
    else {
      keyCode = event.keyCode;
    }
    this.ctx.clearRect(0,0,320,480);
    switch ( keyCode ) {
      // left
      case 37:
        this.currentPosition = [this.currentPosition[0] - this.cell, this.currentPosition[1]]
        this.ctx.fillRect(this.currentPosition[0], this.currentPosition[1], this.cell, this.cell);
        break;

      // up
      case 38:
        this.currentPosition = [this.currentPosition[0], this.currentPosition[1] - this.cell]
        this.ctx.fillRect(this.currentPosition[0], this.currentPosition[1], this.cell, this.cell);
        break;

      // right
      case 39:
        this.currentPosition = [this.currentPosition[0] + this.cell, this.currentPosition[1]]
        this.ctx.fillRect(this.currentPosition[0], this.currentPosition[1], this.cell, this.cell);

        break;

      // down
      case 40:
        this.currentPosition = [this.currentPosition[0], this.currentPosition[1] + this.cell]
        this.ctx.fillRect(this.currentPosition[0], this.currentPosition[1], this.cell, this.cell);

        break;
      default:
        break;
    }
  }
}