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
  const animationContainer = document.getElementById("animation-cont");
  if((ratio > 0.4) && (ratio < 1))
  {

    const animation = lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: false,
      autoplay: true,
    //   animationData: animationData,
        path: "/data/JSON/9x18/data.json",
    });
  }
  if((ratio >= 1))
  {
    const animation = lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: false,
      autoplay: true,
    //   animationData: animationData,
        path: "/data/other/data.json",
    });
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