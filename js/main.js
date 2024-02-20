$( document ).ready(function() {
  var ratio = $(window).width() / $(window).height();
  console.log(ratio);
  if((ratio > 0.4) && (ratio < 1))
  {
    $('.animation_container img').attr('src', '/images/animations/compressed/WCCE_Teaser_9x18.gif')
    $('.main .main-container').css('background-image', 'url(/images/home_page_background_mobile.svg)')
  }
  if((ratio >= 1) && (ratio < 1.3))
  {
    $('.animation_container img').attr('src', '/images/animations/compressed/WCCE_Teaser_5x4.gif')
    $('.main .main-container').css('background-image', 'url(/images/home_page_background_5x4.svg)')
  }
  if((ratio >= 1.3) && (ratio < 1.4))
  {
    $('.animation_container img').attr('src', '/images/animations/compressed/WCCE_Teaser_4x3.gif')
    $('.main .main-container').css('background-image', 'url(/images/home_page_background_4x3.svg)')
  }
  if((ratio >= 1.4) && (ratio < 1.55))
  {
    $('.animation_container img').attr('src', '/images/animations/compressed/WCCE_Teaser_1440x1024.gif')
    $('.main .main-container').css('background-image', 'url(/images/home_page_background_4x3.svg)')
  }
  if((ratio >= 1.55) && (ratio < 1.7))
  {
    $('.animation_container img').attr('src', '/images/animations/compressed/WCCE_Teaser_16x10.gif')
    $('.main .main-container').css('background-image', 'url(/images/home_page_background_16x10.svg)')
  }
  if((ratio >= 1.7) && (ratio < 1.9))
  {
    $('.animation_container img').attr('src', '/images/animations/compressed/WCCE_Teaser_16x9.gif')
    $('.main .main-container').css('background-image', 'url(/images/home_page_background_16x9.svg)')
  }

    setTimeout(function() {
        $('.animation_container').addClass("d-none");
      }, 11000);

    if($( document ).width() < 768)
    {
      $(".right-aside").removeClass("hoverable");
      $(".right-aside").on("click", function(){
        $(this).toggleClass("menu_opened");
      });

      $(".right-aside .nav-link").on("click", function(){
        $(this).addClass("active");
        $(".right-aside").removeClass("menu_opened");
      });
    }
});

$(".org_body_toggle").on("click", function(){
  var $this = $(this);
  var parent = $this.parents('div');

  parent.toggleClass('toggle-minus');
  parent.toggleClass('toggle-plus');

  parent.siblings(".organiser_body").toggleClass('opened')
  parent.siblings(".organiser_body").toggleClass('closed')

});



// console.log($( document ).width());