window.onload = function() {
	var nav2 = document.getElementById("nav2");
	if (nav2) {
		nav2.getElementsByTagName("a")[1].setAttribute("onclick", "create_menu();return false;");
	}
	myHeight = new fx.Height('nav', {duration: 400});
	myHeight.hide();
}