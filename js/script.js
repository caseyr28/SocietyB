$(function(){
	
	// container is the DOM element;
	// userText is the textbox
	
	var part1 = $("#part1"),
		part2 = $('#part2'); 
		

	// Shuffle the contents of container
	$.when($.part1.shuffleLetters()).then(function(){
		part2.shuffleLetters();
	});


	
});