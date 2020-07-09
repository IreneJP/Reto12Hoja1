"use strict";
exports.__esModule = true;
exports.suma = void 0;
//Realizar una función que te devuelva la suma del numero de caracteres de las palabras almacenadas en un array.
function suma(palabras) {
    var letras = "";
    for (var i = 0; i < palabras.length; i++) {
        letras += palabras[i];
    }
    return letras.length;
}
exports.suma = suma;
