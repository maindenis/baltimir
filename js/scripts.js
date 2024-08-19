function  getScrollParams() {
    if(bodyWidth > 900) {
        articleCoord = $("#sidebarWrapp").offset().top;
        documentScroll = $(document).scrollTop();
        if(articleCoord < documentScroll) {
            $("#sidebar").offset({top: documentScroll});
        } else {
            $("#sidebarWrapp").addClass("bootmAlign");
            $("#sidebar").offset({top: false});
            $("#sidebar").attr("style", "");  
        }
        if(documentScroll > articleCoord + $("#sidebarWrapp").height() - $("#sidebar").height()) {
            $("#sidebarWrapp").addClass("bootmAlign");
            $("#sidebar").offset({top: false});
            $("#sidebar").attr("style", "");        
        } else {
            $("#sidebarWrapp").removeClass("bootmAlign");
        }
    } else {
        $("#sidebar").attr("style", "");
    }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
// getScrollParams();
});

$(document).scroll(function() {
// getScrollParams();
});

$(document).ready(function() {
    // getScrollParams();

    // if( $(".slider").length > 0 ) {
    //     $(".slider").not(".slick-initialized").slick({
    //         dots: true,
    //         arrows: true,
    //         // autoplay: true,
    //         autoplaySpeed: 4000,
    //         speed: 2000,
    //         variableWidth: true,
    //         slidesToShow: 5,
    //         slidesToScroll: 1,
    //         centerMode: true,
    //         appendDots: $(".slider_dots"),
    //         appendArrows: $(".slider_arrows"),
    //         // fade: true,
    //         responsive: [
    //             {
    //               breakpoint: 1125,
    //               settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1
    //               }
    //             },
    //             // {
    //             //   breakpoint: 540,
    //             //   settings: {
    //             //     slidesToShow: 1,
    //             //     slidesToScroll: 1
    //             //   }
    //             // }
    //           ]
    //     });
    // }

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // -------------

    Fancybox.bind("[data-fancybox]", {});

});