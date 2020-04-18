<!DOCTYPE html>
<html lang="en">
<?php require_once('head.php'); ?>
<body>

<div class="control-panel">
  <button class="btn btn-primary" id="play" type="button" data-toggle="collapse">
    <i class="fas fa-play"></i>
  </button>
  <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#control-settings"
          aria-expanded="false" aria-controls="control-settings">
    <i class="fas fa-cog"></i>
  </button>
  <button class="btn btn-info" type="button" data-toggle="collapse" data-target="#control-info" aria-expanded="false"
          aria-controls="control-info">
    <i class="fas fa-trophy"></i>
  </button>
</div>
<div class="accordion" id="accordion">
  <div class="collapse" data-parent="#accordion" id="control-settings">
    <div class="card card-body">
      <div class="snake-speed card-1">
        <ul class="list-group">
          <li class="list-group-item active">Sneak speed</li>
          <li class="list-group-item ">
            <div class="custom-control custom-radio">
              <input name="radionBTN" value="150" type="radio" id="radio1" class="custom-control-input">
              <label for="radio1" class="custom-control-label">Slowpoke</label>
            </div>
          </li>
          <li class="list-group-item ">
            <div class="custom-control custom-radio">
              <input name="radionBTN" value="350" type="radio" checked id="radio2" class="custom-control-input">
              <label for="radio2" class="custom-control-label">Junior</label>
            </div>
          </li>
          <li class="list-group-item ">
            <div class="custom-control custom-radio">
              <input name="radionBTN" value="500" type="radio" id="radio3" class="custom-control-input">
              <label for="radio3" class="custom-control-label">Gamer</label>
            </div>
          </li>
          <li class="list-group-item ">
            <div class="custom-control custom-radio">
              <input name="radionBTN" value="650" type="radio" id="radio4" class="custom-control-input">
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
  <div class="collapse" data-parent="#accordion" id="control-info">
    <!--  <div class="card card-body">-->
    <!--    <span>Your points : </span><span id="points">0</span> |-->
    <!--    <span>High score : </span><span id="points">0</span> | <span id="points">0</span> | <span id="points">0</span>-->
    <!--  </div>-->
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
              Slowpoke
            </button>
          </h2>
        </div>

        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Points</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>45</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>23</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>14</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="false" aria-controls="collapseTwo">
              Junior
            </button>
          </h2>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Points</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>45</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>23</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>14</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree"
                    aria-expanded="true" aria-controls="collapseOne">
              Gamer
            </button>
          </h2>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Points</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>45</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>23</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>14</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingFour">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour"
                    aria-expanded="false" aria-controls="collapseTwo">
              Hero
            </button>
          </h2>
        </div>
        <div id="collapseFour" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Points</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>45</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>23</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>14</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="wrapper">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell">
  </div>
  <div class="cell"></div>
  <div class="cell sneak-tail"></div>
  <div class="cell sneak-body">
  </div>
  <div class="cell sneak-head"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell cherry"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>

<!-- Babel -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.25.0/babel.min.js"></script>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

<!-- user scripts -->
<script type="text/babel" src="js/script.js"></script>
<script type="text/babel" src="js/game.js"></script>
</body>
</html>