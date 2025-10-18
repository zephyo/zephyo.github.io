// custom js for loading and unloading elements when clicking subcategories

var loaded = false;
var time = 5000;
$(function () {
	setTimeout(function () {
		if (!loaded) {
			console.log("didn't load in time! fade out loading screen anyways");
			fadeOutLoadingScreen();
		}
	}, time);
});

var fadeOutLoadingScreen = function () {
	// preloader
	$("#status")
		.delay(10)
		.fadeOut(function () {
			$(".socials").css({
				opacity: 1,
			});
			$(".navigation").css({
				opacity: 1,
			});
		}); // will first fade out the loading animation
	$("#preloader")
		.delay(560)
		.fadeOut("slow", function () {
			$("body").css({
				overflow: "visible",
			});
		}); // will fade out the white DIV that covers the website.
};

$(window).load(function () {
	loaded = true;
	console.log("loaded!");
	fadeOutLoadingScreen();

	// back to top
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $(".cd-top"),
		$nav = $(".navigation");

	//hide or show the "back to top" link
	$(window).scroll(function () {
		$(this).scrollTop() > offset
			? $back_to_top.addClass("cd-is-visible") && $nav.addClass("bg")
			: $back_to_top.removeClass("cd-is-visible cd-fade-out") && $nav.removeClass("bg");
		if ($(this).scrollTop() > offset_opacity) {
			$back_to_top.addClass("cd-fade-out");
		}
	});

	//smooth scroll to top
	$back_to_top.on("click", function (event) {
		event.preventDefault();
		$("body,html").animate(
			{
				scrollTop: 0,
			},
			scroll_top_duration
		);
	});
});

$(document).ready(function () {
	//  isotope
	var $container = $(".portfolio_container");

	$container.isotope({
		filter: "*",
	});

	$(".portfolio_filter a").click(function () {
		$(".portfolio_filter .active").removeClass("active");
		$(this).addClass("active");

		var selector = $(this).attr("data-filter");
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine: "jquery",
			},
		});

		// scroll down to "projects"
		$("html, body").animate(
			{
				scrollTop: $("#projects").offset().top,
			},
			1000
		);

		return false;
	});

	// input
	$(".input-contact input, .textarea-contact textarea").focus(function () {
		$(this).next("span").addClass("active");
	});
	$(".input-contact input, .textarea-contact textarea").blur(function () {
		if ($(this).val() === "") {
			$(this).next("span").removeClass("active");
		}
	});
});
