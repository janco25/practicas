/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	var n,ed;
	n = document.getElementById('nombre').value;
	ed = document.getElementById('edad').value;
	alert("nombre " + n +" edad " + ed);
}

