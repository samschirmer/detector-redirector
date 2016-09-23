// config: urls
var mobile_url = 'http://m.domain.com';
var desktop_url = 'http://domain.com';
var max_mobile_width = 800;

// writing cookie
function writeCookie(result) {
	document.cookie = "is_mobile=" + result + "; expires=Sun, 27 Dec 2099 12:00:00 UTC";
}

// detecting max resolution and redirecting if < 800 pixels
function checkWidth() {
	var width = window.screen.width;
	if (width < max_mobile_width + 1) { 
		console.log("mobile user detected; redirecting")
		writeCookie(true);
		return true; 
	} else { 
		console.log("high resolution detected; staying on desktop site")
		writeCookie(false);
		return false; 
	}
}

function redirect(result) {
	if (result === true) { window.location = mobile_url; }
}

function fetchCookie(cookieName) {
	var name = cookieName + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') { c = c.substring(1); }
		if (c.indexOf(name) == 0) {	return c.substring(name.length,c.length); }
	}
	return "";
}

function checkCookie() {
	var is_mobile = fetchCookie("is_mobile");
	if (is_mobile != "") {
		console.log("is mobile?: " + is_mobile);
		redirect(is_mobile);
	} else {
		console.log("no cookie found; checking width");
		redirect(checkWidth());
	}
}

// calling it
checkCookie();
