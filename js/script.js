// Nav Java Start 

$(function(){

    
var navtop = $('#nav').offset().top;

$(window).scroll(function(){

    var navscroll = $(this).scrollTop();

    if( navscroll > navtop ){
        $('#nav').addClass('fix_nav');
    }

    else{
        $('#nav').removeClass('fix_nav');
    }
});


})

// Nav Java end

// Back to top Java start

$(function(){

    $('.backtotop').click(function(){

        $('html,body').animate({
            scrollTop: 0,
        }, 3000 );

    });

    $(window).scroll(function(){

        var scrolltop = $(this).scrollTop();

        if( scrolltop > 200 ){

            $('.backtotop').addClass('fix_backtotop');

            $('.backtotop').fadeIn('fix_backtotop');
            
        }

        else{

            $('.backtotop').removeClass('fix_backtotop');

            $('.backtotop').fadeOut('fix_backtotop');

        }
    });

});

// Back to top Java end

// Portfolio Slider start

$('.port_img').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true
  }, 1000);
$('#banner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true
  }, 1000);

// Portfolio Slider end