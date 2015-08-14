var jq = document.createElement('script');
addLibrary(jq ,"https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
var updateHTMLJS = document.createElement('script');
addLibrary(updateHTMLJS,"http://localhost:8000/javascripts/updateHTML.js")
/*var subtielJS = document.createElement('script');
addLibrary(subtielJS,"http://localhost:8000/javascripts/jquery.srt.js")*/
setTimeout(function(){
	/*Loading bootstrap.js*/
	var bootstrapJS = document.createElement('script');
    addLibrary(bootstrapJS,"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js")
	/*loading bootstrap CSS*/
	var bootstrap = document.createElement("link");
    bootstrap.setAttribute("rel", "stylesheet");
    bootstrap.setAttribute("type", "text/css");
    bootstrap.setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");
    document.getElementsByTagName('head')[0].appendChild(bootstrap);
	createPlaylist();
	createVideoPlayer();
},1000)

function addLibrary(element,url){
	element.src = url;
	document.getElementsByTagName('head')[0].appendChild(element);
}

