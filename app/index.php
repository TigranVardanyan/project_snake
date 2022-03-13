<!DOCTYPE html>
<html lang="en">
<head>
  <noscript><div><img src="https://mc.yandex.ru/watch/62038246" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  <!-- /Yandex.Metrika counter -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Tigran Vardanyan">
  <!--fontawesome-->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
  <!--bootstrap-->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <!-- user CSS -->
  <link rel="stylesheet" href="css/main.css">

  <title>Project snake</title>
</head>
<body>
<div id="points"></div>
<div class="control-panel">
  <button class="btn btn-primary" id="btn-start">
    <i class="fas fa-play"></i>
  </button>
  <button class="btn btn-success" id="btn-settings">
    <i class="fas fa-cog"></i>
  </button>
  <button class="btn btn-info" id="btn-info">
    <i class="fas fa-trophy"></i>
  </button>
</div>
<div class="accordion" id="accordion">
  <div class="collapse" id="control-game">
    <div class="wrapper" id="playgroundWrapper"></div>
  </div>
  <div class="collapse"  id="control-settings">
    <div class="card card-body">
      <div class="snake-speed card-1">
        <ul class="list-group">
          <li class="list-group-item active">Enter your name</li>
          <li class="list-group-item">
            <input id="userName" type="text" class="form-control" value="">
          </li>
        </ul>
      </div>
      <div class="snake-speed card-1">
        <ul class="list-group">
          <li class="list-group-item active">Sneak speed</li>
          <li class="list-group-item ">
            <div class="custom-control custom-radio">
              <input name="radionBTN" value="500" type="radio" checked id="radio1" class="custom-control-input">
              <label for="radio1" class="custom-control-label">Slowpoke</label>
            </div>
          </li>
          <li class="list-group-item ">
            <div class="custom-control custom-radio">
              <input name="radionBTN" value="350" type="radio" id="radio2" class="custom-control-input">
              <label for="radio2" class="custom-control-label">Junior</label>
            </div>
          </li>
          <li class="list-group-item ">
            <div class="custom-control custom-radio">
              <input name="radionBTN" value="200" type="radio" id="radio3" class="custom-control-input">
              <label for="radio3" class="custom-control-label">Gamer</label>
            </div>
          </li>
          <li class="list-group-item ">
            <div class="custom-control custom-radio">
              <input name="radionBTN" value="100" type="radio" id="radio4" class="custom-control-input">
              <label for="radio4" class="custom-control-label">Hero</label>
            </div>
          </li>
        </ul>
      </div>
      <div class="cherryOrEgg card">
        <ul class="list-group">
          <li class="list-group-item active">Cherry or egg?</li>
          <li class="list-group-item ">
            <div class="custom-control custom-radio">
              <input name="cherryOrEgg" value="cherry" checked type="radio" id="cherry" class="custom-control-input">
              <label for="cherry" class="custom-control-label">Cherry</label>
            </div>
          </li>
          <li class="list-group-item ">
            <div class="custom-control custom-radio">
              <input name="cherryOrEgg" value="egg" type="radio" id="egg" class="custom-control-input">
              <label for="egg" class="custom-control-label">Egg</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="collapse"  id="control-info">
    <div class="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button class="btn btn-link" type="button" >
              Local highscore
            </button>
          </h2>
        </div>
        <div id="collapseOne" >
          <table class="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Points</th>
            </tr>
            </thead>
            <tbody id="localHigscoreList">

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>


<script
    src="https://code.jquery.com/jquery-3.5.0.min.js"
    integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ="
    crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

<!-- user scripts -->
<script type="module" src="js/Game.js"></script>
<script type="module" src="js/script.js"></script>

<script type="" src="js/game1.js"></script>
</body>
</html>