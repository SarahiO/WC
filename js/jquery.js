$(document).ready(function(){

    $(window).scroll(function(e) {
        e.preventDefault();
        $(".slideanim").each(function(){
          var pos = $(this).offset().top;
    
          var winTop = $(window).scrollTop();
            if (pos < winTop + 1000) {
              $(this).addClass("imgslide");
            }
        });
      });
})

// Smooth scrolling when clicking links
$(function(){
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
            }
        }
    });
})

$(window).load(function() {
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, //px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e){
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
})

$('form').on('submit', function(e) {
    if (grecaptcha.get.getResponse() == "") {
        e.preventDefault();
        alert("You must complete the Captcha!!");
    } else {
        alert("Thank you for you Enquiry");
    }
})

//$(function(){
//    var correctCaptcha = function(response) {
//        alert(response);
//    };
//})