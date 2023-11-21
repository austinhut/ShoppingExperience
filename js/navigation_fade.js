function fadeButtons() {
  $(document).ready(function(){
    
    $('nav a, footer a, button').mouseover(function(){
      $(this).fadeTo(150, .3);
    });
    
    $('nav a, footer a, button').mouseout(function(){
      $(this).fadeTo(150, 1);
    });

    $('nav a, footer a, button').on('click', function(){
      $('nav a, footer a, button').fadeTo(0, 1);
    });
  });
};
fadeButtons();