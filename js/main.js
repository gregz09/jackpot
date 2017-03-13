var roll;
function loadItems(){
	for(var i=1;i<10;i++){
		$('.slot').append("<img class='item' id='" + i +"' src='img/" + i + ".jpg'></img>");
	}
}

function wypelnij(){
	var random = 0;
	$(".slot").each(function(){
		random = Math.floor(Math.random()*9);
		$(this).children().eq(random).css("display","inline");
	});
}

function start(){
	$(".slot").each(function(){
		random = Math.floor(Math.random()*9);
		$(this).children().css("display","none");
		$(this).children().eq(random).css("display","inline");
	});
	roll = setTimeout(start,20);	
}

$(document).ready(function(){
	loadItems();
	wypelnij();
	$("#start").click(function(){
		if(roll)
			clearTimeout(roll);
		start();
	});
	$("#stop").click(function(){
		clearTimeout(roll);
		var scores = [];
		$(".item:visible").each(function(){
			scores.push($(this).attr("id"));
		});
		if(scores[0] == scores[1] && scores[1] == scores[2])
			console.log('You win!');
		else
			console.log('You lose!');
	});
});