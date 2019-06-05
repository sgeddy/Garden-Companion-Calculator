function onboarding(buttonID) {
	if (buttonID == "getStarted") {
		document.getElementById("userDiv").style.display = "block";
		document.getElementById("progressContainer").style.display = "block";
		document.getElementById("welcome").style.display = "none";
		document.getElementById("welcomeHeader").innerHTML = "Garden Bot Onboarding";
		document.getElementById("fbarrows").style.display = "block";
		progress(10, "forward");
	}

	// Forward and Back Button Management through Onboarding

	// page 1
	else if (buttonID == "imageButtonBack1") {
		window.location.href = "createAccount.html";
	}
	else if (buttonID == "imageButtonForward1") {
		document.getElementById("userDiv").style.display = "none";
		document.getElementById("imageButtonBack1").id = "imageButtonBack2";
		document.getElementById("imageButtonForward1").id = "imageButtonForward2";
		document.getElementById("passwordDiv1").style.display = "block";		
		progress(20, "forward");
	}

	// page 2
	else if (buttonID == "imageButtonBack2") {
		onboarding("getStarted");
		document.getElementById("passwordDiv1").style.display = "none";
		document.getElementById("imageButtonBack2").id = "imageButtonBack1";
		document.getElementById("imageButtonForward2").id = "imageButtonForward1";
		progress(10, "back");
	}

	else if (buttonID == "imageButtonForward2") {
		document.getElementById("imageButtonForward2").id = "imageButtonForward3";
		document.getElementById("imageButtonBack2").id = "imageButtonBack3";
		document.getElementById("passwordDiv1").style.display = "none";
		document.getElementById("passwordDiv2").style.display = "block";		
		progress(30, "forward");
	}

	// page 3
	else if (buttonID == "imageButtonBack3") {
		document.getElementById("imageButtonForward3").id = "imageButtonForward2";
		document.getElementById("imageButtonBack3").id = "imageButtonBack2";
		document.getElementById("passwordDiv2").style.display = "none";
		document.getElementById("passwordDiv1").style.display = "block";
		progress(20, "back");
	}
	
	else if (buttonID == "imageButtonForward3") {
		document.getElementById("imageButtonForward3").id = "imageButtonForward4";
		document.getElementById("imageButtonBack3").id = "imageButtonBack4";
		document.getElementById("passwordDiv2").style.display = "none";
		document.getElementById("address").style.display = "block";
		progress(40, "forward");
	}

	//page 4
	else if (buttonID == "imageButtonBack4") {
		document.getElementById("imageButtonForward4").id = "imageButtonForward3";
		document.getElementById("imageButtonBack4").id = "imageButtonBack3";
		document.getElementById("address").style.display = "none";
		document.getElementById("passwordDiv2").style.display = "block";
		progress(30, "back");
	}
	
	else if (buttonID == "imageButtonForward4") {
		document.getElementById("imageButtonForward4").id = "imageButtonForward5";
		document.getElementById("imageButtonBack4").id = "imageButtonBack5";
		document.getElementById("address").style.display = "none";
		document.getElementById("sunlight").style.display = "block";
		progress(50, "forward");
	}

	//page 5
	else if (buttonID == "imageButtonBack5") {
		document.getElementById("imageButtonForward5").id = "imageButtonForward4";
		document.getElementById("imageButtonBack5").id = "imageButtonBack4";
		document.getElementById("address").style.display = "none";
		document.getElementById("passwordDiv2").style.display = "block";
		progress(40, "back");
	}
	
	else if (buttonID == "imageButtonForward5") {
		document.getElementById("imageButtonForward3").id = "imageButtonForward4";
		document.getElementById("imageButtonBack3").id = "imageButtonBack4";
		document.getElementById("address").style.display = "block";
		progress(50, "forward");
	}
}

function progress(percent, direction) {
	var elem = document.getElementById("myBar");
	
	if (direction == "forward") {
		var width = percent - 10;
    	var id = setInterval(frame, 10);
		function frame() {
			if (width >= percent) {
		    	clearInterval(id);
		    } 
		    else {
		    	width++; 
		    	elem.style.width = width + '%'; 
		    	elem.innerHTML = width * 1  + '%';
		    }	
	  	}
	}
	else {
		var width = percent + 10;
    	var id = setInterval(frame, 10);
		function frame() {
			if (width <= percent) {
		    	clearInterval(id);
		    } 
		    else {
		    	width--; 
	    		elem.style.width = width + '%'; 
	    		elem.innerHTML = width * 1  + '%';
		    }
	    }	
	}
}

function loadPlants(data) {
	// Load plants.json
  	document.getElementById("plants").innerHTML = data[0].list[0].main.temp_max;

}