

(function($){
  $(function(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, options);
    });

    $('.sidenav').sidenav();

  }); // end of document read

  $(document).ready(function(){ jQuery
    $('.carousel').carousel();
  });
})(jQuery); // end of jQuery name space
