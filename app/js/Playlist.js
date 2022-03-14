export default class Playlist {
  playlist = [];

  constructor( audios ) {
    for ( const audio in audios ) {
      this.playlist[audio] = audios[audio]
    }
  }

  play = ( audio ) => {
    this.playlist[audio].play();
  }

  pause = (audio) => {
    this.playlist[audio].pause();
  }

  pauseAll = () => {
    for ( let audio in this.playlist ) {
      this.playlist[audio].pause();
    }
  }

  stop = (audio) => {
    this.playlist[audio].pause()
    this.playlist[audio].currentTime = 0
  }

  stopAll = () => {
    for ( const audio in this.playlist ) {
      this.playlist[audio].pause();
      this.playlist[audio].currentTime = 0
    }
  }
}