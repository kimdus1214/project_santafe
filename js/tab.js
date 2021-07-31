$(document).ready(function () {

  // menuBtn 
  $('#menuBtn').click(function () {
    if ($('#tabMenuWrap').hasClass('tabMenuWrapNone')) {
      $('#tabMenuWrap').addClass('tabMenuWrapAction').removeClass('tabMenuWrapNone');
      $('#tabMenu').stop().animate({
        left : 0
      }, 500);
      $('#tabMenuWrap, #tabHeader').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });

    } else {
      $('#tabMenuWrap').addClass('tabMenuWrapNone');
      $('#tabMenu').stop().animate({
        left : '-60%'
      }, 500);
      $('#tabMenuWrap, #tabHeader').off('scroll touchmove mousewheel'); 
    }

    if ($('#menuBtn svg').hasClass('fa-bars')) {
      $('#menuBtn svg').addClass('fa-times').removeClass('fa-bars');
    } else {
      $('#menuBtn svg').addClass('fa-bars')
    }


  });
 // menuBtn End
  
  // menuBtnLeft
  $('#menuBtnLeft').click(function () {
    if ($('#tabRightMenuWrap').hasClass('tabMenuWrapNone')) {
      $('#tabRightMenuWrap').addClass('tabMenuWrapAction').removeClass('tabMenuWrapNone');
      $('#tabRightMenuBox').stop().animate({
        right: 0
      }, 500);
      $('#tabRightMenuWrap, #tabHeader').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    } else {
      $('#tabRightMenuWrap').addClass('tabMenuWrapNone');
      $('#tabRightMenuBox').stop().animate({
        right: '-40%'
      }, 500);
      $('#tabRightMenuWrap, #tabHeader').off('scroll touchmove mousewheel'); 
    }
    
    if ($('#menuBtnLeft svg').hasClass('fa-plus')) {
      $('#menuBtnLeft svg').addClass('fa-times').removeClass('fa-plus');
    } else {
      $('#menuBtnLeft svg').addClass('fa-plus')
    }


  });
  // menuBtnLeft End
});