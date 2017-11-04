
function validateForm() {
	// Get references to the form elements
	//Variables being set up
	var fname = document.getElementById("fname");
	var sname = document.getElementById("sname");
	var error = 0; //0 = No error
	
	if (fname.value.length == 0) {
		alert("Please enter your first name!")
		error = 1;
	}
	else if (sname.value.length == 0) {
		alert("Please enter your surname!")
		error = 1;
	}
	else if (email.value.length == 0) {
		alert("Please enter your email!")
		error = 1;
	}
	else if (num.value.length == 0) {
		alert("Please enter your phone number!")
		error = 1;
	}
	else if (text.value.length == 0) {
		alert("Please enter your message below!")
		error = 1;
	}
	else{
		error = 0;
	}
	if (error == 1){
		return false;
	}
	else {
		return true;
	}
} // End of the function definition

function init() {
	document.getElementById("submit").onclick = validateForm;
	
} // End of init function

// Assign an event handler to the window's load event.
window.onload = init;
	