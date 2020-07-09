//Realizar una función que te devuelva si existe un numero par en el array de números que introduces como parámetro de entrada

function pares(numeros:number[]){
    let resultado:number[]= numeros
    let resultadoFinal:string = ""
    
    for ( let i = 0; i<numeros.length; i++ ){
        
       if (resultado[i]%2 == 0)
       {
        resultadoFinal += resultado[i]+", "
       }    
    }     
      return resultadoFinal   
}   
    

console.log("Se muestran los numeros pares del siguiente arrary [8,32,53,63,64,86,45]: ")
console.log(pares([8,32,53,63,64,86,45]))

console.log("\n")

console.log("Se muestran los numeros pares del siguiente arrary [345,363,23,534,634,461]: ")
console.log(pares([345,363,23,534,634,461]))

console.log("\n")

console.log("Se muestran los numeros pares del siguiente arrary [24,435,257,76,355]: ")
console.log(pares([24,435,257,76,355]))