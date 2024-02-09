$( document ).ready(function() {
    setTimeout(function() {
        $('.animation_container').addClass("d-none");
        $('.main-container').removeClass("d-none");
        $('.right-aside').removeClass("d-none");
        // console.log("10sek")
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