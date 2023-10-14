
    function generateNumber(){

        const min = Math.ceil(document.querySelector("#min").value)
        const max = Math.floor(document.querySelector("#max").value)
    
        if ( min >= max ) {
            alert("o numero de entrada precisa ser menor que número total")
        } else{
        const vencedor = Math.floor(Math.random() * (max - min + 1)) + min;
    
        alert(vencedor, "parabéns ao vencedor")
    }
}