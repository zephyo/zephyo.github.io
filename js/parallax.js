$(document).ready(function () {
  var x = 0.5;
  var y = 0.5;
  var maxRotation = 18;
  var perspective = 1000;
  var friction = 1 / 60;
  var $introcell = $("#intro-cell");

  function lerp(value1, value2, amount) {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return value1 + (value2 - value1) * amount;
  }

  $("#box-intro").mousemove(function (event) {
    var pos = [
      event.pageX / document.body.clientWidth,
      event.pageY / document.body.clientHeight,
    ];
    for (var i = 0; i < pos.length; i++) {
      if (pos[i] < 0) {
        pos[i] = 0;
      }
      if (pos[i] > 1) {
        pos[i] = 1;
      }
    }
    y = lerp(y, Math.round((pos[0] * 2 - 1) * maxRotation), friction);
    x = lerp(
      x,
      Math.round((pos[1] * -2 + 1) * maxRotation),
      friction
    );
    s =
      "perspective(" +
      perspective +
      ") translateZ(-400px) rotateX(" +
      x +
      "deg) rotateY(" +
      y +
      "deg)";
    $introcell.css("transform", s);
    $introcell.css("-webkit-transform", s);
  });
});
