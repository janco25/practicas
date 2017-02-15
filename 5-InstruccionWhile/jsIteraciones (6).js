function Mostrar()
{
    var n;
	var contador=0;
	var acumulador=0;
    while(contador<5){
        n= parseInt(prompt("ingrese numero"));
        acumulador=acumulador+n;
        contador++;
    }
   

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN