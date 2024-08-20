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

function getRespNavParams() {
    documentScroll = $(document).scrollTop();
    respScrollTop = $(".resp_nav_stick_wrapp").offset().top;
    if(documentScroll >= respScrollTop) {
        $(".resp_nav_stick_wrapp").addClass("fixed");
    } else {
        $(".resp_nav_stick_wrapp").removeClass("fixed");
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
getRespNavParams();
});

$(document).scroll(function() {
// getScrollParams();
    getRespNavParams();
});

$(document).ready(function() {
    // getScrollParams();
    getRespNavParams();

    if( $(".slider").length > 0 ) {
        $(".slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $(".sl_1_prev"),
            nextArrow: $(".sl_1_next"),
            // centerMode: true,
            // appendDots: $(".slider_dots"),
            // appendArrows: $(".slider_arrows"),
            fade: true,
        });
    }

    if( $(".slider_2").length > 0 ) {
        $(".slider_2").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 2000,
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $(".sl_2_prev"),
            nextArrow: $(".sl_2_next"),
            // centerMode: true,
            // appendDots: $(".slider_dots"),
            // appendArrows: $(".slider_arrows"),
            // fade: true,
        });
    }

    if( $(".gallery").length > 0 ) {

        $('.gallery').on('init', function(event, slick, currentSlide, nextSlide){
            slickDots = $(this).find(".slick-dots");
            counter = 0;
            slickDots.find("li").removeClass("red");
            slickDots.find("li").each(function() {
                if(counter <= slick.currentSlide) {
                    $(this).addClass("red");
                }
                counter++;
            });
        });
        $('.gallery').on('afterChange', function(event, slick, currentSlide, nextSlide){
            slickDots = $(this).find(".slick-dots");
            counter = 0;
            slickDots.find("li").removeClass("red");
            slickDots.find("li").each(function() {
                if(counter <= slick.currentSlide) {
                    $(this).addClass("red");
                }
                counter++;
            });
        });

        $(".gallery").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 500,
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false
            // centerMode: true,
            // appendDots: $(".slider_dots"),
            // appendArrows: $(".slider_arrows"),
            // fade: true,
        });
    }

    // --------------

    $(".resp_btn").click(function(e) {
      e.preventDefault();
      if( $("#respNav").is(":hidden") ) {
          $("#respNav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#respNav").fadeOut(300);
          $(this).removeClass("active");
      }
    });

    $(".close").click(function(e) {
        e.preventDefault();
        $("#respNav").fadeOut(300);
        $(".resp_btn").removeClass("active");
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#respNav").is(":visible") &&
            bodyWidth <= 767) {
                $("#respNav").fadeOut(300);
                $(".resp_btn").removeClass("active");
        }
    });

    // -------------

    Fancybox.bind("[data-fancybox]", {});

});