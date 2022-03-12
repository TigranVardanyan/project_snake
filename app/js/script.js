import Game from "./Game.js";

$('#btn-start').click(function () {
  $('#control-settings').collapse('hide');
  $('#control-info').collapse('hide');
  $('#control-game').collapse('show');
});
$('#btn-settings').click(function () {
  $('#control-settings').collapse('toggle');
  $('#control-info').collapse('hide');
  $('#control-game').collapse('hide');
});
$('#btn-info').click(function () {
  $('#control-settings').collapse('hide');
  $('#control-info').collapse('toggle');
  $('#control-game').collapse('hide');
  let localHigscoreList = document.getElementById('localHigscoreList');
  let localHighscoreTop = JSON.parse(localStorage.getItem('highscore')).sort(function ( a, b ) {
    return a - b;
  }).reverse();
  let highscoreHTML = '';
  for ( let i = 0; i < 5; i++ ) {
    highscoreHTML += `
        <tr>
          <th scope="row">${i + 1}</th>
          <td scope="col">${localHighscoreTop[i] ? localHighscoreTop[i] : 0}</td>
        </tr>`;
  }
  localHigscoreList.innerHTML = highscoreHTML;
});

document.getElementById('btn-start').addEventListener("click", () => {
  console.log('123');
  const game = new Game('playgroundWrapper', 200, 1);
})


export const ez = 11