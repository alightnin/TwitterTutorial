var theScroll;
function scroll(){
    theScroll = new iScroll('wrapper');
}


function page(toPage) {
    var toPage = $(toPage),
    fromPage = $("#pages .current");
    if(toPage.hasClass("current") || toPage === fromPage) {
        return;
    };
    toPage.addClass("current fade in").one("webkitAnimationEnd", function(){
        fromPage.removeClass("current fade out");
        toPage.removeClass("fade in")
    });
    fromPage.addClass("fade out");
}

function getTweets() {
    var q = "ufo+spotted"
        rpp = 5,
        twurl = "http://search.twitter.com/search.json?q=";
    $.getJSON(twurl + q + "&rpp=" + rpp + "&callback=?", function(data){
        $("#tmpl-tweets").tmpl(data.results).appendTo("#tweets");
    });
}

function initialize() {
	var mapOptions ={
		center: new google.maps.LatLng(39.08, -108.52),
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map= new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}
function capturePhoto(){
    navigator.camera.getPicture(uploadPhoto,null,{sourceType:1,quality:60});
}
function uploadPhoto(data){
	// this is where you would send the image file to server
	//output image to screen
		cameraPic.src = data;
		navigator.notification.alert('Your Photo has been uploaded',okay,'Photo Uploaded','OK');
		if (failedToUpload){
			navigator.notification.alert('Your Photo has failed to upload',failedDismissed,'Photo Not Uploaded','OK');
	    }
}
function error(){
	alert('Failed because'+ message);
}
function okay(){
    // Do something
}
