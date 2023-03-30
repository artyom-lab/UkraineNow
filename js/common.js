$(function() {

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
  e.stopPropagation();
  });


  Waves.attach('.btn-donate');
  Waves.attach('.btn',  ['waves-light']);
  Waves.init();

  var owl = $('.owl-1').owlCarousel({
    center: true,
    items: 3,
    // loop: true,
    margin: 0,
    smartSpeed: 500,
    mouseDrag: false,
    touchDrag: false,
    dots: false,
  });

  windowResp();
  $(window).resize(function() {
    windowResp();
  });

  function windowResp() {
    if ($(window).width() < 1200)
      owlDrag();
  };

  var waiting = 0;
  function owlDrag() {
    jquerySwipeHandler.handleSwipe(".owl-box", [
      jquerySwipeHandler.SWIPE_LEFT, jquerySwipeHandler.SWIPE_RIGHT
    ], function (direction) {

      if (waiting === 0) {

        waiting = 600;

        console.log("swipe2: ", direction);
        if (direction === 'SWIPE_LEFT')
          owl.trigger('next.owl.carousel');
        else if (direction === 'SWIPE_RIGHT')
          owl.trigger('prev.owl.carousel');

        setTimeout(function() {
          waiting = 0;
        }, 600);
      };
    });
  };

  delete window.owlDrag;

  $(document).on('click', '.owl-item', function(e) {
  const carousel = $('.owl-carousel').data('owl.carousel');
  carousel.to(carousel.relative($(this).index()), false, true);
});

  var popupTimer;
  function delayPopup(popup) {
    popupTimer = setTimeout(function() { $(popup).popover('hide') }, 4000);
  };
  $('.copy').click(function () {
    clearTimeout(popupTimer);
    $(".popover").popover('hide');
    var $input = $(this).parents('.copy-box').find('.copy-text');
    /* Select the text field */
    $input.select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
    $(this)
      .popover({
        title    : 'Successfully copied!',
        // content  : false,
      })
      .popover('show')
    ;
    // Hide popup after 4 seconds
    delayPopup(this);
  });

$(".scroll-to").mPageScroll2id({
  scrollSpeed: 900,
}); 

autosize();
function autosize(){
    var text = $('.autosize');

    text.each(function(){
        $(this).attr('rows',1);
        resize($(this));
    });

    text.on('input', function(){
        resize($(this));
    });
    
    function resize ($text) {
        $text.css('height', 'auto');
        $text.css('height', $text[0].scrollHeight+'px');
    }
}

});




