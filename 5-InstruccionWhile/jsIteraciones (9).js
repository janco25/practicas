function Mostrar()
{

	var contador=0,max,min,n;
	// declarar variables
	max=0;
    min=15248;
	var respuesta=true

	while(respuesta==true)
	{
        n=parseInt(prompt("ingres numero"));
        if (max<n){
            max=n;
        }
        if(min>n){
            min=n;   
        }
	   respuesta=confirm("continuara ");
	}
    document.getElementById('maximo').value=max;
    document.getElementById('minimo').value=min;

}//FIN DE LA FUNCIÓN