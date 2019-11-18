
$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$("nav li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});
$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$(".button-1 a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});
$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$("header a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});
$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$(".team-cta-wrap a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});

(function($){
	$(function() {
	  $('.menu__icon').on('click', function() {
		$(this).closest('.menu')
		  .toggleClass('menu_state_open');
	  });
	  
	  $('.menu__links-item').on('click', function() {
		// do something
  
		$(this).closest('.menu')
		  .removeClass('menu_state_open');
	  });
	});
  })(jQuery);


$(window).scroll(function(){
      var $real_height = $('.title-slide-wr').outerHeight();
      if ($(this).scrollTop() >= $real_height) {
          $('header').addClass('fixed');
      } else {
          $('header').removeClass('fixed');
      }
});

$(function(){
	$("#menu").click(function(){ 
		$("header").toggleClass('nav_active');
		
	  });
});






$(".all").click(function () {
	$("[class^=gallery-image]").hide();
	$("[class*=gallery-image]").show();
	$(".portfolio-works").addClass('portf-all');
  })
  
  $(".print").click(function () {
	$("[class^=gallery-image]").hide();
	$("[class*=_print]").show();
	$('.portfolio-works').removeClass('portf-all');
	$(".portfolio-works").addClass('portf-active');
	$(".portfolio-work").addClass('portf-act');
  })
  
  $(".identity").click(function () {
	$("[class^=gallery-image]").hide();
	$("[class*=_identity]").show();
	$('.portfolio-works').removeClass('portf-all');
	$(".portfolio-works").addClass('portf-active');
	$(".portfolio-work").addClass('portf-act');
  })
  
  $(".branding").click(function () {
	$("[class^=gallery-image]").hide();
	$("[class*=_branding]").show();
	$('.portfolio-works').removeClass('portf-all');
	$(".portfolio-works").addClass('portf-active');
	$(".portfolio-work").addClass('portf-act');
  })
  
  $(".web").click(function () {
	$("[class^=gallery-image]").hide();
	$("[class*=_web]").show();
	$('.portfolio-works').removeClass('portf-all');
	$(".portfolio-works").addClass('portf-active');
	$(".portfolio-work").addClass('portf-act');
  })
  $(".html").click(function () {
	$("[class^=gallery-image]").hide();
	$("[class*=_html]").show();
	$('.portfolio-works').removeClass('portf-all');
	$(".portfolio-works").addClass('portf-active');
	$(".portfolio-work").addClass('portf-act');
  })
  
  $(".wordpress").click(function () {
	$("[class^=gallery-image]").hide();
	$("[class*=_wordpress]").show();
	$('.portfolio-works').removeClass('portf-all');
	$(".portfolio-works").addClass('portf-active');
	$(".portfolio-work").addClass('portf-act');
  })


//   <script>
    
  //viewport
  var viewport = $(window),
	setVisible = function(e) {
	  var viewportTop = viewport.scrollTop(),
		viewportBottom = viewport.scrollTop() + viewport.height();
	  $('section.services').each(function() {
		var self = $(this),
		  top = self.offset().top,
		  bottom = top + self.height(),
		  topOnScreen = top >= viewportTop && top <= viewportBottom,
		  bottomOnScreen = bottom >= viewportTop && bottom <= viewportBottom,
		  elemVisible = topOnScreen || bottomOnScreen;
		self.toggleClass('activeSection', elemVisible);
		console.log(JSON.stringify({
		  "section.services": self[0].classList[0],
		  "viewportTop": viewportTop,
		  "top": top,
		  "topOnScreen": topOnScreen,
		  "viewportBottom": viewportBottom,
		  "bottom": bottom,
		  "bottomOnScreen": bottomOnScreen,
		  "elemVisible": elemVisible
		}));
	  });
	};
  viewport.scroll(setVisible);
  setVisible();
//   </script>   

$(function(){
	$(".price-wr").click(function(){ 
		
	$(".price-wr-hover").addClass('hover_active');
	$('.price-wr-hover').removeClass('hover_active');
	
	});
});





	$(document).ready(function(){
		$('.price-wrap').slick({
			arrows: false,
			//  autoplay: true,
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [                                    
					{   breakpoint: 641,
						settings: {
							centerMode: false,
							slidesToShow: 2,
							slidesToScroll: 1,
							dots: true, }
					} ,
					{   breakpoint: 481,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: true,}
					}
				]
		});
	});

	$(document).ready(function(){
		$('.team-slider').slick({
			autoplay: true,
			autoplaySpeed: 6000,
			arrows: false,
			dots: true
					});

		});

		$(document).ready(function(){
		$('.testimonials-wrap').slick({
			autoplay: true,
			autoplaySpeed: 6000,
			arrows: false,
			dots: true
					});

		});
	

