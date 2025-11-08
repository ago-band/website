/*
 * Main.js
 * 
 * Author: Manuel Minniti
 * Date: 12.05.2015
 * 
 */

var AGO = {
	evn: null,
	Home: {},
	Shows: {},
	Contact: {},
	Imprint: {},
};

AGO.Main = function() {
	AGO.env = getEnvironment();
	
	if(AGO.env === "xs" || AGO.env === "sm") {
		$("body").addClass("mobile");
	} else {
		$("body").addClass("desktop");
	}
}

AGO.Home = function() {
	this.initialize = function() {
		if(AGO.env === "xs" || AGO.env === "sm") {
			$(".screen-2").css("background", "none");
		}		
		//
		this.bindListeners();
	}
	
	this.bindListeners = function() {		
		$(window).on("scroll", function(event) {			
			if(AGO.env === "lg" || AGO.env === "md") {
				var threshold = 16,
					scrollTop = $(window).scrollTop(),
					teasers = $(".screen-2 .offset-container");
								
				(scrollTop < threshold)
				? teasers.addClass("offset")
				: teasers.removeClass("offset");
			}
		}).trigger("scroll");
		
		$(window).on("resize", function(event) {
			var wHeight = $(window).height(),
				wWidth = $(window).width();
			
			$(".screen").css({ width: wWidth });
		}).trigger("resize");
	}
	
	this.initialize();
}

//
function getEnvironment() {
	var envs = ['xs', 'sm', 'md', 'lg'];

    var $el = $('<div>');
    $el.appendTo($('body'));

    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];

        $el.addClass('hidden-'+env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env;
        }
    };
}
