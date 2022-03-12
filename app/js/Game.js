export default class Game {
  constructor( playgroundWrapper = 'playgroundWrapper', speed, target, containerWidth = 16, containerHeight = 24 ) {
    console.log('Game ctor');
    this.speed = speed;
    this.target = target;
    this.containerWidth = containerWidth;
    this.containerHeight = containerHeight;
    this.setUpAudio();
    this.buildPlayground(this.containerWidth, this.containerHeight)
  }

  setUpAudio = () => {
    this.audio = [];
    this.audio['soundtrack'] = new Audio('assets/playback.wav');
    this.audio['dieSound'] = new Audio('assets/dieSound.wav');
    this.audio['biteSound'] = new Audio('assets/bite.wav');
  }

  buildPlayground = ( width, heigth ) => {
    let cells = [];
    for ( let i = 0; i < width * heigth; i++ ) {
      let cell = document.createElement('div')
      cell.className = 'cell';
      cells.push(cell)
    }
    document.getElementById('playgroundWrapper').append(...cells);
  }


}