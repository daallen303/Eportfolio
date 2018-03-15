
var interval
var imagenum = 5;
var timer = function(){
interval = setInterval(function(){ 
	if(imagenum <=9)imagenum +=1;
	else imagenum = 1; 
	if(imagenum < 2) document.getElementById("left").style.display = "none";
	else document.getElementById("left").style.display = "block";
	if(imagenum > 9) document.getElementById("right").style.display = "none";
	else document.getElementById("right").style.display = "block";
	var slidenumber = "./slideshow"+imagenum+".jpg";
    document.getElementById("slideshow").style.backgroundImage = "url('"+slidenumber+"')";
    }, 5000);

};
timer();
$("#left").click( function() {
	if(imagenum >= 2)imagenum -= 1;
	var slidenumber = "./slideshow"+imagenum+".jpg";
    document.getElementById("slideshow").style.backgroundImage = "url('"+slidenumber+"')";
    clearInterval(interval);
    timer();
    document.getElementById("right").style.display = "block";
    if(imagenum<2) document.getElementById("left").style.display = "none";
});
$("#right").click( function() {
	if(imagenum <= 9)imagenum +=1;
	var slidenumber = "./slideshow"+imagenum+".jpg";
    document.getElementById("slideshow").style.backgroundImage = "url('"+slidenumber+"')";
    clearInterval(interval);
    timer();
    if(imagenum ==10) document.getElementById("right").style.display = "none";
    document.getElementById("left").style.display = "block";
});
$("#slideshow").hover( function () {
	
	document.getElementById("slideshowtext").style.display =  "block";
	clearInterval(interval);
});
$("#slideshowtext").hover( function () {
	
	document.getElementById("slideshowtext").style.display =  "block";
	clearInterval(interval);
});
$("#slideshowtext").mouseout( function () {
	
	document.getElementById("slideshowtext").style.display =  "none";
	timer();
});
$("#slideshow").mouseout( function () {
	document.getElementById("slideshowtext").style.display =  "none";
	timer();
}); 
$("#left").hover( function () {
	document.getElementById("slideshowtext").style.display =  "block";
});
$("#left").mouseout( function () {
	document.getElementById("slideshowtext").style.display =  "none";
});
$("#right").hover( function () {
	document.getElementById("slideshowtext").style.display =  "block";
});
$("#right").mouseout( function () {
	document.getElementById("slideshowtext").style.display =  "none";
});

