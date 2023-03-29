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
    loop: true,
    margin: 0,
    smartSpeed: 0,
    mouseDrag: false,
    touchDrag: false,
    dots: false,
    slideBy: 1,
  });

  windowResp();
  $(window).resize(function() {
    windowResp();
  });

  function windowResp() {
    if ($(window).width() < 1200)
      owlDrag();
  };

  function owlDrag() {
    jquerySwipeHandler.handleSwipe(".slide", [
      jquerySwipeHandler.SWIPE_LEFT, jquerySwipeHandler.SWIPE_RIGHT
    ], function (direction) {
      console.log("swipe2: ", direction);
      if (direction === 'SWIPE_LEFT')
        owl.trigger('next.owl.carousel');
      else if  (direction === 'SWIPE_RIGHT')
        owl.trigger('prev.owl.carousel');
    });
  };

  $(document).on('click', '.owl-item', function() {
    owlIndex = $(this).index();
    console.log('checking');
    count = document.querySelectorAll(".owl-item.active").length;
    $('.owl-stage-outer').trigger('to.owl.carousel', owlIndex - count);
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




