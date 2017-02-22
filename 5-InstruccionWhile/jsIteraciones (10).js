function Mostrar()
{
	var n,sposi=0,sneg=0,cantpos=0,cantneg=0,
        cantcero=0,cantpar=0,promposi,promneg,diferencia;
	//declarar contadores y variables 
	
	var respuesta=true;

	while(respuesta!=false)
	{
        n=parseInt(prompt("ingrese un numero"));
        if(!(n<-1))
        {
            sposi+=n;
            cantpos++;
            //fin if 1
            if(n==0)
                {
                    cantcero++;
                    cantpos--;
                }
            if (n%2==0 && n!=0)
                {
                    cantpar++;
                }
                //fin de if 2
        }else
        {
            sneg+=n;
            cantneg++;
        }//fin de if
            	
	   respuesta=confirm("continuara");
	}//fin de while
    promposi=sposi/cantpos;
    promneg=sneg/cantneg;
    diferencia=sposi+sneg;
    document.write("suma de +: "+sposi+"<br>");
    document.write("suma de negativos: "+sneg+"<br>");
    document.write("cant positivos: "+cantpos+"<br>");
    document.write("cant negativos: "+cantneg+"<br>");
    document.write("cant ceros: "+cantcero+"<br>");
    document.write("cant pares: "+cantpar+"<br>");
    document.write("promedio positivos: "+promposi+"<br>");
    document.write("promedio negativos: "+promneg+"<br>");
    document.write("diferencia en tre -+: "+diferencia);


}//FIN DE LA FUNCIÓN