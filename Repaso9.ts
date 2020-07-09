//Realizar una función que te imprima por consola el siguiente mensaje:
    //o “El numero es par”, si el numero introducido como parámetro de entrada es par
    //o “El numero es impar”, si el numero introducido como parámetro de entrada es impar


export function parImpar (numero:number){
        if(numero%2 == 0){
            console.log("El numero es par")
            }else{
             console.log("El numero es impar")}
}

    parImpar(2)
    parImpar(3)

