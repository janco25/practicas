function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

    while(respuesta=="si"){
        n= parseInt(prompt("ingrese numero"));
        if(n%2==0){
            positivo+=n;
            alert("positivo");
        }else{
            negativo*=n;
            alert("negativo");
        }
        
        contador++;
        respuesta=prompt("ingresar si o no");
    }
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN