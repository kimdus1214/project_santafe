$(document).ready(function () {
    $(window).scroll(function () {
      var techScroll = $(window).scrollTop();
      console.log(techScroll);
        var techOffset = $("#technologySection").offset();
        var perOffset = $("#performanceSection").offset();
      if (techScroll > techOffset.top - 650) {
        $("#techAnimateImg").stop().animate(
          {
            left: 0,
          },
          500
        );
      } else {
        $("#techAnimateImg").stop().animate({
          left: -1000,
        });
      }
  
      if (techScroll >= perOffset.top - 650) {
        $("#perforAnimateImg").stop().animate(
          {
            right: 0,
          },
          500
        );
      } else {
        $("#perforAnimateImg").stop().animate({
          right: -1000,
        });
      }
  
      if (techScroll == 0) {
        $("#topBtn").css({
          display: "none",
        });
      } else {
        $("#topBtn").css({
          display: "block",
        });
      }
    });
  
    $("#topBtn").click(function () {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });
  });
  