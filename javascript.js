    // Фиксированный Header 

		$(document).ready(function(){
			$("#header").removeClass("default");
			$(window).scroll(function(){
				if($(this).scrollTop() > 20) {
					$("#header").addClass("default").fadeIn('fast');
				} else {
					$("#header").removeClass("default").fadeIn('fast');
				};
			});
		});

	
	// Плавный скролл по якорям 

		$(document).ready(function(){
			$('a[href*=#]').bind("click", function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top
				}, 1000);
				e.preventDefault();
			});
			return false;
		});