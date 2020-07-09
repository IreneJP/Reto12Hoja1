//Realizar una función que imprima los números impares existentes hasta el número indicado como parámetro de entrada.
function impares(n) {
    var impar = "";
    for (var i = 0; i < n; i++) {
        if (i % 2 != 0) {
            impar += i + ", ";
        }
    }
    console.log(impar);
}
console.log("Se muestran los numeros impares hasta el número 8");
impares(8);
console.log("\n");
console.log("Se muestran los numeros impares hasta el número 46");
impares(46);
console.log("\n");
console.log("Se muestran los numeros impares hasta el número 55");
impares(55);
