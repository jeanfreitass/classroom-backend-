// import { calcularMedia } from "../src/calcularMediaAluno";
const {calcularMedia} = require("../src/calcularMediaAluno")

it ("Função definida",()=>{
    expect(calcularMedia).toBeDefined()
})
it ("Todas as notas foram inseridas",()=>{
    expect(calcularMedia).toThrow("Notas A1 e A2 não informadas")
})
it ("Notas negativas",()=>{
    expect(()=> calcularMedia(a1 = -2, a2 = 3)).toThrow("Notas não podem ser negativas")
})
it ("Calculo media basico",()=>{
    expect(calcularMedia(a1 = 2, a2 = 3)).toBeCloseTo(2.84)
})
it ("Nota A3 não pode ser negativa",()=>{
    expect(()=>calcularMedia(a1 = 1, a2 = 0.6, a3 = -2)).toThrow("Nota não pode ser negativa")
})
it ("A3 substitui A1 com nota de ",()=>{
    expect(calcularMedia(a1 = 4, a2 = 5)).toBeCloseTo(4.84)
})