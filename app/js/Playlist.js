export default class Playlist {
  playlist = [];

  constructor( audios ) {
    for ( const audio in audios ) {
      this.playlist[audio] = audios[audio]
    }
  }

  /***
   *
   * @param {Audio} audio - Audio object
   * @param {boolean} looped - should be played in a loop
   */
  play = ( audio, looped = false) => {
    if ( loop ) {
      this.playlist[audio].loop = true
    }
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