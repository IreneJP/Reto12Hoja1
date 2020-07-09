// Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal

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


console.log(zodiaco (25,6))

console.log(zodiaco(12, 4))

console.log(zodiaco (1,12))

console.log(zodiaco(31, 9))
