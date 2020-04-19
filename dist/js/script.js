$('#btn-start').click(function () {
    $('#control-settings').collapse('hide');
    $('#control-info').collapse('hide');
    $('#control-game').collapse('show');
  }
);

$('#btn-settings').click(function () {
    $('#control-settings').collapse('toggle');
    $('#control-info').collapse('hide');
    $('#control-game').collapse('hide');
  }
);

$('#btn-info').click(function () {
    $('#control-settings').collapse('hide');
    $('#control-info').collapse('toggle');
    $('#control-game').collapse('hide');
  }
);

