//Realizar una función que te devuelva la suma del numero de caracteres de las palabras almacenadas en un array.
export function suma (palabras:string[]){
    let letras:string=""
    for(let i=0; i<palabras.length; i++){
        letras += palabras[i]
    }
    return letras.length
}




