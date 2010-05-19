$(document).ready(function() {

	/* Slideshow */
	var items = $("ul#slideshowItems li");
	var buttons = $("ul#slideshowNav li"),
		allButtons = buttons.length;
	var counter = 0;
	items.eq(0).addClass("active");
	buttons.eq(0).addClass("active");

	function showItem(i) {
		if (buttons.eq(i).hasClass("active")) {
			return false;
		}
		if (items.is(":animated")) {
			return false;
		}

		buttons.removeClass("active");
		buttons.eq(i).addClass("active");
		
		items.eq(i).css("z-index", 49)

		items.filter(".active").removeClass("active").fadeOut("slow", function() {
			$(this).css("z-index", 40).show();
			items.eq(i).css("z-index", 50).addClass("active");
		});
	}
	
	buttons.each(function(i, el) {
		var equivPic = items.eq(i);
		var zIndex = 50 - i;
		equivPic.css({
			zIndex: zIndex
		});

		$(el).bind("mouseover", function() {
			if (typeof interval != "undefined") { clearInterval(interval); }
			showItem(i);
		});
		$(el).bind("mouseleave", function() {
			start(i);
		});

	});

	function start(i) {
		if (typeof i != "undefined") {
			counter = i;
		}
		interval = setInterval(function() {
			counter < allButtons - 1 ? counter++ : counter = 0;
			showItem(counter);
		}, 6000);
	}
	start();

});