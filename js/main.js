(function ($) {
    "use strict";
    $(function() {
        var rotation = 0, 
          scrollLoc = $(document).scrollTop();
        $(window).scroll(function() {
          var newLoc = $(document).scrollTop();
          var diff = scrollLoc - newLoc;
          rotation += diff, scrollLoc = newLoc;
          var rotationStr = "rotate(" + rotation + "deg)";
          $("#leaf-img").css({
            "-webkit-transform": rotationStr,
            "-moz-transform": rotationStr,
            "transform": rotationStr
          });
        });
      })
})(jQuery);