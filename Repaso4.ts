//Realizar una función que como parámetro de entrada reciba un array y como salida devuelva el array revertido.
//function revNumber(array: number[]){
/*return array.reverse();
}

function revString (arr
console.log(revNumber([4ay: string[]){
return array.reverse ()
console.log(revString(["Playa", "Arena", "Sol", "Espuma", "Marea", "Mareo", "Colores", "Luna"]))
}*/

function revArray(array: string[]){
let resultado:string[] = new Array (array.length)
for (let i=array.length-1; i>=0; i--){
    
    resultado.push(array[i])


}

return resultado

}

console.log(revArray(["Playa", "Arena", "Sol", "Espuma", "Marea", "Mareo", "Colores", "Luna"]))

function reverseArr(input:string[]) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

var a = ["Playa", "Arena", "Sol", "Espuma", "Marea", "Mareo", "Colores", "Luna"]
var b = reverseArr(a);

console.log(reverseArr(a))