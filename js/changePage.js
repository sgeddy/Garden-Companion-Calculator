function changePage(buttonID) {

	if (buttonID == "submitCredentials") {
		window.location.href = "Herb&VegetableCompanionPlanner.html";
	}
	else if (buttonID == "login") {
		window.location.href = "login.html";
	}
	else if (buttonID == "createAccount") {
		window.location.href = "createAccount.html";
	}
	else if (buttonID == "imageButtonBack1") {
		window.location.href = "createAccount.html";
	}
	else {window.location.href = "404.html";}
}