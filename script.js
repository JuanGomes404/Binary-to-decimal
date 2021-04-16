let calc = document.querySelector("input#Calculate")
calc.addEventListener('click', calcula)
let input_bin = document.querySelector("input#bin")

function calcula(){
    let bin = input_bin.value
    let dec = 0

    for (let c = 0; c < bin.length; c++){
    dec += Math.pow(2, c) * bin[bin.length - c - 1]; //calcula para pegar do último ao primeiro
    
    }
    exit(dec);
}
//essa é a saída do programa, que envia o número decimal pro input decimal
function exit(dec_result){

    document.querySelector("input#dec").value = dec_result

}

//LIMPAR INPUT

let clear = document.querySelector("input#clear")
clear.addEventListener('click', clean)

function clean(){

document.querySelector("input#dec").value = ""
document.querySelector("input#bin").value = ""

}