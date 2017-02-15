function Mostrar()
{
var i=0;
var clave = prompt("ingrese el número clave.");
while(i<3){
       if(clave=="utn750"){
           alert("correcto");
           i=4;
          // break;
       }else{
           alert("vuelva a intertarlo: "+i);
                      
             clave = prompt("ingrese el número clave.")
             if(i==2){
                 alert("se acabaron los intentos");
                 i=4;
             }
           i++;
       }
   
}//fin de while
    
}//FIN DE LA FUNCIÓN
