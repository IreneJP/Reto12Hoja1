//Realizar un procedimiento que reciba un array de nombres y te devuelva verdadero si y solo si todos los nombres empiezan por M

function nombresM(nombres:string[]) {
    let i=0
    let result
    while ( i<nombres.length){
        if ((nombres[i][0]=="M")){
             result = true
            }else {
            result = false
            }
        i++
    }
    console.log(result)
}

nombresM(["Maria"])
nombresM(["Maria", "Miriam","Miguel"])
nombresM(["Maria", "Belén"])
nombresM(["Maria", "Pepa"])

/*

["Maria"].every(elem => elem.indexOf("M", 0))
console.log(["Maria"].every(elem => elem.indexOf("M", 1)))


console.log(["Maria", "Juana"].every(elem => elem.indexOf("M", 1)))*/