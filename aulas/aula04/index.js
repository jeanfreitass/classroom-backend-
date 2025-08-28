function soma(x , y){
    return x + y
}
function sub(x , y){
    return x - y
}
function div(x , y){
    if (y === 0) return "Não é possível dividir por zero"
    return x / y
}





export {soma, div, sub };