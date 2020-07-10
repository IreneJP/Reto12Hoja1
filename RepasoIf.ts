//11. Clasificar las funciones según el tipo y guardarlas en ficheros distintos
//RepasoIf.ts
//RepasoFor.ts
//RepasoWhile.ts

function zodiaco (dia:number, mes:number){
    let signo = ""
    switch(mes){
        case (1 ):
            if (dia >= 21) {
                signo = "Acuario";
            } else {
                signo = "Capricornio";
            }
            break;
        case 2:
                if (dia >= 19) {
                    signo = "Piscis";
                } else {
                    signo = "Acuario";
                }
                break;
        case 3:
                if (dia >= 20) {
                    signo = "Aries";
                } else {
                    signo = "Piscis";
                }
                break;    
        case 4:
            if (dia >= 20) {
                signo = "Tauro";
            } else {
                signo = "Aries";
            }
            break;  
            case 5:
                if (dia >= 21) {
                    signo = "Géminis";
                } else {
                    signo = "Tauro";
                }
                break;
        case 6:
                if (dia >= 20) {
                    signo = "Cáncer";
                } else {
                    signo = "Géminis";
                }
                break;
        case 7:
                if (dia >= 22) {
                    signo = "Leo";
                } else {
                    signo = "Cáncer";
                }
                break;
        case 8:
                if (dia >= 21) {
                    signo = "Virgo";
                } else {
                    signo = "Leo";
                }
                break;
        case 9:
                if (dia >= 22) {
                    signo = "Libra";
                } else {
                    signo = "Virgo";
                }
                break;
        case 10:
                if (dia >= 22) {
                    signo = "Escorpión";
                } else {
                    signo = "Libra";
                }
                break;
        case 11:
                if (dia >= 21) {
                    signo = "Sagitario";
                } else {
                    signo = "Escorpión";
                }
                break;
        case 12:
                if (dia >= 21) {
                    signo = "Capricornio";
                } else {
                    signo = "Sagitario";
                }
        break;
    }
    return "Tu signo del zodiaco es: " + signo;
}      


function continente (pais:string){
    let miContinente = ""
            if (pais == "España"){
                    miContinente = "Europa";
                }else if (pais == "Francia"){
                    miContinente = "Europa";
                } else if (pais == "Italia") {
                    miContinente = "Europa";
                } else if (pais == "Alemania"){
                    miContinente = "Europa";
                } else if (pais == "Portugal") {
                miContinente = "Europa";
            }
            
            if (pais == "China"){
                    miContinente = "Asia";
                }else if (pais == "Japón"){
                    miContinente = "Asia";
                } else if (pais == "Filipinas") {
                    miContinente = "Asia";
                } else if (pais == "Turkmenistán"){
                    miContinente = "Asia";
                } else if (pais == "Mongolia") {
                miContinente = "Asia";
            }

            if (pais == "Colombia"){
                miContinente = "América";
            }else if (pais == "Panamá"){
                miContinente = "América";
            } else if (pais == "Canadá") {
                miContinente = "América";
            } else if (pais == "Estados Unidos"){
                miContinente = "América";
            } else if (pais == "Jamaica") {
            miContinente = "América";
            }

            if (pais == "Luanda"){
                miContinente = "África";
            }else if (pais == "Argel"){
                miContinente = "África";
            } else if (pais == "Porto Novo") {
                miContinente = "África";
            } else if (pais == "El Cairo"){
                miContinente = "África";
            } else if (pais == "Gaborone") {
            miContinente = "África";
            }

            if (pais == "Australia"){
                miContinente = "Oceanía";
            }else if (pais == "Nueva Zelanda"){
                miContinente = "Oceanía";
            } else if (pais == "Islas Marshall") {
                miContinente = "Oceanía";
            } else if (pais == "Samoa"){
                miContinente = "Oceanía";
            } else if (pais == "Papúa Nueva Guinea") {
            miContinente = "Oceanía";
            }

    
    return "El país introducido pertenece a " + miContinente
}


function arcoíris (colores:string[]){
  
    
   
    if (colores.includes("red")){
        console.log("El color rojo está en el arcoiris")
    }
    if (colores.includes("green")){
        console.log("El color verde está en el arcoiris")
    }
    if (colores.includes("blue") ){
            console.log("El color azul está en el arcoiris")
    }  

}

function parImpar (numero:number){
    if(numero%2 == 0){
        console.log("El numero es par")
        }else{
         console.log("El numero es impar")}
}