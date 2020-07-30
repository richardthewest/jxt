function navHamburgerFunction() {
	var link = document.getElementById("links");
	var nav = document.getElementById("topNav");

	if (link.style.display === "block") {
		link.style.display = "none";
		nav.style.backgroundColor = "";
	} else {
		link.style.display = "block";
		nav.style.backgroundColor = "white";
	};
}