var svg = document.getElementById("svg");
var korea = document.getElementById("korea");
var japan = document.getElementById("japan");
var korea_medal = [5,8,4];
var japan_medal = [4,5,4];

var korean_circle = function(){
	var circles = d3.selectAll("circle");
	circles.data(korea_medal);
	circles.attr("r", function(d){return 10*d});
}

var japan_circle = function(){
	var circles = d3.selectAll("circle");
	circles.data(japan_medal);
	circles.attr("r", function(d){return 10*d});
}

korea.addEventListener("click", korean_circle);
japan.addEventListener("click", japan_circle);