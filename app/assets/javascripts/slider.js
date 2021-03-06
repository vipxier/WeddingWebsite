var main = function (){
	  $('.arrow-next').unbind("click").bind("click", function(event) {
		  var currentSlide = $('.active-slide');
		  var nextSlide = currentSlide.next();

		  var currentDot = $('.active-dot');
		  var nextDot = currentDot.next();

		  if(nextSlide.length === 0) {
		    nextSlide = $('.slide').first();
		  }

		  currentSlide.fadeOut(600).removeClass('active-slide');
		  nextSlide.fadeIn(600).addClass('active-slide');
			
		if(nextDot.length === 0 ){
			console.log("last dot");
			nextDot=$('.dot').first();
		}
		  currentDot.removeClass('active-dot');
		  nextDot.addClass('active-dot');
	});

	$('.arrow-prev').unbind('click').bind('click',function(){
		var currentSlide = $('.active-slide');
		  var preSlide = currentSlide.prev();

		  var currentDot = $('.active-dot');
		  var prevDot = currentDot.prev();

		  if(preSlide.length == 0) {
		    preSlide = $('.slide').last();
		  }

		  currentSlide.fadeOut(600).removeClass('active-slide');
		  preSlide.fadeIn(600).addClass('active-slide');
			
		if(prevDot.length == 0 ){
			prevDot=$('.dot').last();
		}
		  currentDot.removeClass('active-dot');
		  prevDot.addClass('active-dot');
	});
}
$(document).ready(main);
