function impares(n:number){
    let impar:string = ""
    for ( let i = 0; i<n; i++ ){
        if (i%2 != 0){
            impar += i + ", "
        }   
    } 
    console.log(impar)
}

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

function suma (palabras:string[]){
    let letras:string=""
    for(let i=0; i<palabras.length; i++){
        letras += palabras[i]
    }
    return letras.length
}
