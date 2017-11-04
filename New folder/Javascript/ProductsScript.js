//Put the code that creates an alert into a function
function onclickAlert(){
	alert("You can look, but you can't touch!");
}

//attach the function to an action (clicking a button)
function init(){
	document.getElementById("img").onclick = onclickAlert;
	document.getElementById("img2").onclick = onclickAlert;
	document.getElementById("img3").onclick = onclickAlert;
	document.getElementById("img4").onclick = onclickAlert;
	document.getElementById("img5").onclick = onclickAlert;
}

//Make sure that the init function is loaded by the web browser
//as soon as the page(window) is loaded.
window.onload = init;
