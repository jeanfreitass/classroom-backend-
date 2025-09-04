function calcularMedia(a1 , a2 , a3){
    console.log("Função de calcular media")
    if (!a1 || !a2) throw "Notas A1 e A2 não informadas"
    if (a1 < 0 || a2 < 0 || a3 < 0) throw "Nota não pode ser negativa"
    if (!a3) return a1 * 0.4 + a2 * 0.6
    return Math.max(a1 * 0.4 , a2 * 0.6)

}

module.exports= {calcularMedia}