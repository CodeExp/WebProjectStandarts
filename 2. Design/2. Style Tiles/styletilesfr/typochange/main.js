WebFontConfig = {
google: { families: [ "Noto+Sans::latin" ] }
};
/* https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyANAdBK8xAv8kwrpZ0hQVjmj0peIlFXxtQ */

/*
(function() {
	var wf = document.createElement("script");
	wf.src = ("https:" == document.location.protocol ? "https" : "http") +
	  "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
	wf.type = "text/javascript";
	wf.async = "true";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(wf, s);
})();
*/

function updated(element) {
	var idx=element.selectedIndex;
	var val=element.options[idx].value;
	
	var content=element.options[idx].innerHTML;
	
	alert(val + " " + content);
	
}

document.getElementById("typotitle").onchange = function() {updated(this)};