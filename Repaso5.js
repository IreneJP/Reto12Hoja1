//Realizar una función que reciba como parámetro un array de strings que contenga colores y te imprima en cada caso si el color está en el arcoíris o no.
function arcoíris(colores) {
    if (colores.includes("red")) {
        console.log("El color rojo está en el arcoiris");
    }
    if (colores.includes("green")) {
        console.log("El color verde está en el arcoiris");
    }
    if (colores.includes("blue")) {
        console.log("El color azul está en el arcoiris");
    }
}
arcoíris(["green", "red", "orange", "blue", "purple"]);
//Me da error .includes() usando typeScript
