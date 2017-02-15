function Mostrar()
{

	var contador=0,n;
	var acumulador=0;
	var respuesta='si';
    
    while(respuesta=="si"){
        n= parseInt(prompt("ingrese numero"));
        acumulador=acumulador+n;
        contador++;
        respuesta=prompt("ingresar si o no");
    }

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=Math.trunc(acumulador/contador);

}//FIN DE LA FUNCIÓN