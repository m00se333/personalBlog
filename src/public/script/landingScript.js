$("#wrapper div").hover(function(){
	$(this).css("background", "#CADED3")
	if ($(this).attr("id") === "left") {
		$(this).html("Blog");

	} else if  ($(this).attr("id") === "middle") {	
		$(this).html("About Me");
	} else if ($(this).attr("id") === "right") {
		$(this).html("Projects")
	}
}, function(){
	$(this).css("background", "#2BD69D")
	$(this).html("");
});

$("#navWrapper div").hover(function(){
	$(this).css("background", "#CADED3")
	if ($(this).attr("id") === "leftNav") {
		$(this).html("Blog");

	} else if  ($(this).attr("id") === "middleNav") {	
		$(this).html("About Me");
	} else if ($(this).attr("id") === "rightNav") {
		$(this).html("Projects")
	}
}, function(){
	$(this).css("background", "#2BD69D")
	$(this).html("");
});