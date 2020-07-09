"use strict";
//Realizar una función que te imprima por consola el siguiente mensaje:
//o “El numero es par”, si el numero introducido como parámetro de entrada es par
//o “El numero es impar”, si el numero introducido como parámetro de entrada es impar
exports.__esModule = true;
exports.parImpar = void 0;
function parImpar(numero) {
    if (numero % 2 == 0) {
        console.log("El numero es par");
    }
    else {
        console.log("El numero es impar");
    }
}
exports.parImpar = parImpar;
parImpar(2);
parImpar(3);
