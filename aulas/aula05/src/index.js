function soma (x , y){
   return x + y
}
function sub (x , y){
   return x - y
}
function div (x , y){
    if (y == 0) return undefined
    return x / y
}
function multi (x , y){
    if (x == 0 || y == 0) return 0
    return x * y
}

module.exports = {soma , sub, div, multi}