$(document).ready(function(){

    $(window).scroll(function(e) {
        e.preventDefault();
        $(".slideanim").each(function(){
          var pos = $(this).offset().top;
    
          var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
              $(this).addClass("imgslide");
            }
        });
      });
})
