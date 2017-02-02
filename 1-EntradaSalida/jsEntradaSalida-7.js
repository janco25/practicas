/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var n,n2;
	

function sumar()
{	
	n = parseInt(document.getElementById('nuno').value);
	n2 = parseInt(document.getElementById('ndos').value);
	alert(n + n2);
}

function restar()
{
	n = parseInt(document.getElementById('nuno').value);
	n2 = parseInt(document.getElementById('ndos').value);
	alert(n - n2);
}

function multiplicar()
{ 
	n = parseInt(document.getElementById('nuno').value);
	n2 = parseInt(document.getElementById('ndos').value);
	alert(n * n2);
}

function dividir()
{
	n = parseInt(document.getElementById('nuno').value);
	n2 = parseInt(document.getElementById('ndos').value);
	alert(n / n2);
}

