//Realizar una función que reciba como parámetro un array de strings que contenga colores y te imprima en cada caso si el color está en el arcoíris o no.
/*
let resultado:string = ""
let i=0
   while (i<colores.length){
   resultado += colores[i]
   
   if (resultado.includes("red")){
       
       console.log("El color rojo está en el arcoiris")}
       

   else if (resultado.includes("blue")){
           
           console.log("El color azul está en el arcoiris")}
   else if (resultado.includes("green")){
               
               console.log("El color verde está en el arcoiris")}
   else if (resultado.includes("orange")){
                   
                   console.log("El color naranja está en el arcoiris")}

   else if (resultado.includes("purple")){
                      
                       console.log("El color lila está en el arcoiris")}
   else if (resultado.includes("yellow")){
                           
                           console.log("El color amarillo está en el arcoiris")}
   else   {
                               console.log("Ese color no está en el arcoiris")}
      break;
                             
   }

   i++
}

let resultado:string  = ""
let i=0
   
   do {
       i = 0
       resultado += colores[i]
       if (resultado.includes("red")){
       
           console.log("El color rojo está en el arcoiris")}
           if (resultado.includes("blue")){
               
               console.log("El color azul está en el arcoiris")}
               else if (resultado.includes("green")){
                   
                   console.log("El color verde está en el arcoiris")}
                   else if (resultado.includes("orange")){
                       
                       console.log("El color naranja está en el arcoiris")}
   
                       else if (resultado.includes("purple")){
                          
                           console.log("El color lila está en el arcoiris")}
                           else if (resultado.includes("yellow")){
                               
                               console.log("El color amarillo está en el arcoiris")}
                               else  {
                                   console.log("Ese color no está en el arcoiris")}
       
   

   i++
   break;
   }while (i<colores.length)
  

}
*/
function arcoíris(colores) {
    for (var i = 0; i < colores.length; i++)
        if (colores[i] == "red" || colores[i] == "blue" || colores[i] == "orange" || colores[i] == "purple" || colores[i] == "yellow") {
            console.log("El color " + colores[i] + "  está en el arcoiris");
        }
        else {
            console.log("Ese color no está en el arcoiris");
        }
}
arcoíris(["green", "red", "brown", "blue", "purple", "white"]);
//Aunque me da error, está bien
