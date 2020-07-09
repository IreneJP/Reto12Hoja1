//Realizar un procedimiento que dado un país te imprima en que continente estás.(Max 5 países por continente)

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

console.log(continente("Alemania"))
console.log(continente("Mongolia"))
console.log(continente("Panamá"))
console.log(continente("Porto Novo"))
console.log(continente("Samoa"))