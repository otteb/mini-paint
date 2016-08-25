  $(document).ready(function() {
//VARIABLE LIST:
  var box = $('.box');
  var reset = $('#reset');
  var color = 'white';
  var red = $('#red');
  var blue = $('#blue');
  var green = $('#green');
  var yellow = $('#yellow');
  var white = $('#white');



//MAKES ALL THE BOXES TURN WHITE
box.on('click', function() {
    $(this).addClass(color);
  })

//REMAKE THE WHITED BOX BLACK
box.on('dblclick', function() {
    $(this).removeClass('red blue green yellow white');
  })
//SETS ALL THE SQUARES BACK TO DEFAULT
  reset.on('click', function() {
    box.removeClass('red blue green yellow white');
  })

//CHANGES COLORS OF PIXELS ON CLICK
    red.on('click', function() {
    color = 'red';
  })

  blue.on('click', function() {
    color = 'blue';
  })

  green.on('click', function() {
    color = 'green';
  })

  yellow.on('click', function() {
    color = 'yellow';
  })

  white.on('click', function() {
    color = 'white';
  })
  

  //


  })