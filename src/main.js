define(function (require, exports, module) {
  const add = require('add');

  $('#versions-node').text(versions.node);
  $('#versions-chrome').text(versions.chrome);
  $('#versions-electron').text(versions.electron);

  $('#add').click(() => {
    const op1 = parseInt($('#op1').val(), 10);
    const op2 = parseInt($('#op2').val(), 10);
    $('#result').text(add(op1, op2));
  });
});
