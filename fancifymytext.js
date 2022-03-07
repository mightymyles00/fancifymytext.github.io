function myFunction()
{
	alert("Hello, world!");
	document.getElementById("messagebox").style.fontSize = "24px";

}

function fancyShmancy()
{
	document.getElementById("messagebox").style.fontWeight = "bold";
	document.getElementById("messagebox").style.backgroundColor = "blue";
	document.getElementById("messagebox").style.textDecoration = "underline";


	
}

function boringBetty()
{
	document.getElementById("messagebox").style.fontWeight = "normal";
	document.getElementById("messagebox").style.backgroundColor = "white";


}

function moo()
{
	var textBox = document.getElementById("messagebox").value;
	var uppper = textBox.toUpperCase();
	var parts = textBox.split(" ");
	textBox = parts.join("_");
}