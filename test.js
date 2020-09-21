var m;
var n;
$(document).on("click", "#d", function(){
	n=m*m;
	$("#o").html(n);
});
$(document).on("click", "#q", function(){
	n=m*2;
	$("#o").html(n);
});
$(document).on("click", "#a", function(){
	m=1;
	$("#o").html("1");
});
$(document).on("click", "#b", function(){
	m=2;
	$("#o").html("2");
});
$(document).on("click", "#c", function(){
	m=3;
	$("#o").html("3");
});
$(document).on("click", "#e", function(){
	m=4;
	$("#o").html("4");
});
$(document).on("click", "#f", function(){
	m=5;
	$("#o").html("5");
});
$(document).on("click", "#g", function(){
	m=6;
	$("#o").html("6");
});
$(document).on("click", "#i", function(){
	m=7;
	$("#o").html("7");
});
$(document).on("click", "#j", function(){
	m=8;
	$("#o").html("8");
});
$(document).on("click", "#k", function(){
	m=9;
	$("#o").html("9");
});
$(document).on("click", "#p", function(){
	m=0;
	$("#o").html("0");
});
