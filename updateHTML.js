/***Loading JS***/
var nextVideo = "";
var previousVideo = "";
var currentVideo = 1;
var nextButton = "<button type='button'  class='btn btn-default' onClick='getNextVideo(currentVideo++)'><span class='glyphicon glyphicon-fast-forward '></span></button>";
var previousButton = "<button type='button'  class='btn btn-default' onClick='getPreviousVideo(currentVideo--)'><span class='glyphicon glyphicon-fast-backward '></span></button>";

/**Generatinhg HTML*/
function createPlaylist() {
    videoList = $('a');
    linkString="";
    for(var i =1;i < videoList.length;i++){
    	linkString = linkString+window.location.origin+$(videoList[i]).attr("href")+";"
    }
    console.log(linkString);
}
function getSubtitleDiv(){
	return '<div id="videoSubtitle" class="srt" data-video="videoPlayer" data-srt=""/>';
}
function createVideoPlayer() {
    var videoPlayerHTML = "<video poster='http://localhost:8000/javascripts/ajax_loader.gif' id='videoPlayer' autoplay controls src=''>";
    var historyHTML = createHistoryHTML();
    var containerHTML = "<div style='margin-bottom: 100px;' class='col-md-12'> <div class='col-md-2'>" 
    					+ historyHTML + 
    					"</div><div class='col-md-10'>" 
    					+  videoPlayerHTML + 
    					"</div>"+
    					getSubtitleDiv()
    					+"</div>";
   	var modalHTML = getModalHTML();
   	//modalHTML = modalHTML.replace("{{{myModalContent}}}",containerHTML);
    //$('body').prepend('<div class="jumbotron"><button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Launch Video Player</button></div>');
    $('body').prepend(containerHTML);
   	listenOnEndedEvent();
   	getNextVideo(1)
}
function getModalHTML(){
return '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
		+'<div class="modal-dialog modal-lg" role="document" style="width:90%">'
		+ '<div class="modal-content">'
		+ ' <div class="modal-header">'
		+   '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
		+  '<h4 class="modal-title" id="myModalLabel">Modal title</h4>'
		+' </div>'
		+' <div class="modal-body" style="height:80%">'
		+ '{{{myModalContent}}}'
		+'</div>'
		+' <div class="modal-footer">'
		+  '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
		+  '<button type="button" class="btn btn-primary">Save changes</button>'
		+' </div>'
		+'  </div>'
		+' </div>'
		+'</div>'
}
function createHistoryHTML() {
    return '<div class="btn-toolbar" style="margin-left:5em">' + previousButton + getControlBar() + nextButton +'</div><hr>'+ createHistoryPanel() + '<hr>';
}
function createHistoryPanel() {
    var panelHTML = '<div class="panel panel-primary"><div class="panel-body"><p class="currentVideo"></p></div> <div class="panel-heading">Watched So Far</div>' +  getPanelBody() + '</div>';
    return panelHTML;
}
function getPanelBody(){
	return '<div class="list-group" id="history"></div>';
}
function getControlBar(){
	return	'<button type="button" class="btn btn-default" onClick="controlPlayer()" aria-label="Left Align">'
 			+'<span class="glyphicon glyphicon-pause controlPanel" aria-hidden="true"></span>'
			+'</button>'
}
///Cleanup anchor tags and format them.

function trackHistory(currentVideo) {
/*	currenVideo = currenVideo;*/
	var item = '<a class="list-group-item">'+$(videoList[currentVideo]).html()+'</a>';
	$('#history').prepend(item);
}

function playthisVideo(vidoeIndex){
	 $("#videoPlayer").attr('src', videoList[currentVideo]);
}

function getNextVideo(currentVideo) {
	var videoTitle = $(videoList[currentVideo]).html();
	trackHistory(currentVideo);
   /* currentVideo = currentVideo == 1 ? currentVideo : currentVideo++;*/
    if(currentVideo > videoList.length){
    	currentVideo--;
    	return;
    }
    $("#myModalLabel").html(videoTitle)
    $('.currentVideo').html("currently Playing :-> " + videoTitle);
    $("#videoPlayer").attr('src', $(videoList[currentVideo]).attr("href"));
    // addSubtitle(videoTitle);
}
function getPreviousVideo(currentVideo) {
   /* currentVideo = currentVideo ? currentVideo-- : currentVideo;*/
    if(currentVideo < 1){
    	currentVideo++;
    }
    $("#myModalLabel").html($(videoList[currentVideo]).html())
    $('.currentVideo').html("currently Playing :->" + $(videoList[currentVideo]).html());
    $("#videoPlayer").attr('src', $(videoList[currentVideo]).attr("href"));   
    // addSubtitle($(videoList[currentVideo]).html());
}
function addSubtitle(videoTitle){
	$("#videoSubtitle").attr("data-srt","http://i2.k3.wservices.ch/Subtitles/Series/G/Game%20of%20Thrones/Season%203/Game.of.Thrones.S03E01.HDTV.x264-2HD.srt");
	$('.srt').each(function() {
    var subtitleElement = $(this);
    var videoId = subtitleElement.attr('data-video');
    if(!videoId) return;
    var srtUrl = subtitleElement.attr('data-srt');
    if(srtUrl) {
      $(this).load(srtUrl, function (responseText, textStatus, req) { playSubtitles(subtitleElement)})
    } else {
      playSubtitles(subtitleElement);
    }
  });
}
function controlPlayer(){
	var vid = document.getElementById("videoPlayer"); 
	if($('.controlPanel').hasClass('glyphicon-play')){
		$('.controlPanel').removeClass('glyphicon-play');
		$('.controlPanel').addClass('glyphicon-pause');
		vid.play();
	}else{
		$('.controlPanel').addClass('glyphicon-play');
		$('.controlPanel').removeClass('glyphicon-pause');
		vid.pause();
	}
}
function listenOnEndedEvent(){
	var vid = document.getElementById("videoPlayer"); 
	vid.onended = function(){
		console.log("Video Ended..");
		getNextVideo(currentVideo++)
	}
	/*vid.addEventListener('onended',endedOnEventHandler, false);*/
}
