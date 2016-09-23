# detector-redirector
Javascript screen width detection and browser redirection

This script will detect any webpage visitors that have a screen width less than (or equal to) a user-designated maximum. It will then write a cookie and redirect the user to a URL, presumably a mobile site, if the threshold is not breached. If the screen meets the criteria, the cookie will still be written, but the visitor will not be redirected. 

The HTML pages each have a link that will rewrite the cookie with the opposite preference and redirect the visitor appropriately. 
