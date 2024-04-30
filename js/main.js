$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

if($(location). prop('href') !== $(location).attr("origin")){
  $(".main").css('transform', 'translateY(0)')
}

$( document ).ready(function() {
  if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
  } else {
      window.onbeforeunload = function () {
          window.scrollTo(0, 0);
      }
  }
  var ratio = $(window).width() / $(window).height();
  if((ratio > 0.4) && (ratio < 1))
  {
    $('.animation_container source').attr('src', '/images/animations/videos/WCCE_Teaser_9x18.mp4')
    $('.main .main-container').css('background-image', 'url(/images/home_page_background_mobile.svg)')
  }
  if((ratio >= 1) && (ratio < 1.3))
  {
    $('.animation_container source').attr('src', '/images/animations/videos/WCCE_Teaser_5x4.mp4')
    $('.main .main-container').css('background-image', 'url(/images/home_page_background_5x4.svg)')
  }
  if((ratio >= 1.3) && (ratio < 1.4))
  {
    $('.animation_container source').attr('src', '/images/animations/videos/WCCE_Teaser_4x3.mp4')
    $('.main .main-container').css('background-image', 'url(/images/home_page_background_4x3.svg)')
  }
  if((ratio >= 1.4) && (ratio < 1.55))
  {
    $('.animation_container source').attr('src', '/images/animations/videos/WCCE_Teaser_1440x1024.mp4')
    $('.main .main-container').css('background-image', 'url(/images/home_page_background_4x3.svg)')
  }
  if((ratio >= 1.55) && (ratio < 1.7))
  {
    $('.animation_container source').attr('src', '/images/animations/videos/WCCE_Teaser_16x10.mp4')
    $('.main .main-container').css('background-image', 'url(/images/home_page_background_16x10.svg)')
  }
  if((ratio >= 1.7) && (ratio < 1.9))
  {
    $('.animation_container source').attr('src', '/images/animations/videos/WCCE_Teaser_16x9.mp4')
    $('.main .main-container').css('background-image', 'url(/images/home_page_background_16x9.svg)')
  }
  if((ratio >= 2))
  {
    $('.main .main-container').css('background-image', 'url(/images/home_page_background_2x1.svg)')
  }

    if($('.animation_container').hasClass('show'))
    {
      setTimeout(function() {
          $('.animation_container').removeClass("show");
          $('.animation_container').addClass("hide");
          $('.animation_container').css('display', 'none')
        }, 11000);
    }

    if($( document ).width() < 768)
    {
      $(".right-aside").removeClass("hoverable");
      $(".right-aside").on("click", function(event){
        if(!($(event.target).prop("class") == 'nav_link_circle'))
        {
          $(this).toggleClass("menu_opened");
        }
      });
      $(".right-aside .nav-link").on("click", function(event){
        $(this).addClass("active");
        $(".right-aside").removeClass("menu_opened");
      });
    }

    // setTimeout(function() {
    //   $(".wave_image").attr('src', '/images/right_wave.svg');
    // }, 1700);

    $(".wave_image").each(function(){
      console.log($(this).isInViewport());
      if($(this).isInViewport()){
      setTimeout(function() {
        $(this).attr('src', '/images/right_wave.svg');
      }, 1700);
    }
  });

});

$(".org_body_toggle").on("click", function(){
  var $this = $(this);
  var parent = $this.parents('div');

  parent.toggleClass('toggle-minus');
  parent.toggleClass('toggle-plus');

  parent.siblings(".organiser_body").toggleClass('opened')
  parent.siblings(".organiser_body").toggleClass('closed')

});

$(window).on('load', function () {
  if($(location).prop('href') !== $(location).attr("origin")){
    $(".main").addClass('animate');
  }

});

$(window).on('resize scroll', function() {
  $(".wave_image").each(function(){
    console.log($(this).isInViewport());
    if($(this).isInViewport()){
      setTimeout(function() {
        console.log($(this).attr('src'))
        $(this).attr('src', '/images/right_wave.svg');
      }, 1700);
    } else{
      $(this).attr('src', '/images/animations/Line_Separator.gif');
    }
  });
});