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
