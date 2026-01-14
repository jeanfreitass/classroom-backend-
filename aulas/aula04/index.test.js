import {soma, div, sub} from "./index.js"


if (soma(2,2) === 4 ) console.log("1° Passou")
else console.log("1° Falhou")

if (soma(-1,2) === 1 ) console.log("2° Passou")
else console.log("3° Falhou")

if (soma(0,3) === 3 ) console.log("3° Passou")
else console.log("3° Falhou")

if (soma(0.5,3) === 3.5 ) console.log("4° Passou")
else console.log("4° Falhou")

if (soma(-0,-0.3) === -0.3 ) console.log("5° Passou")
else console.log("5° Falhou")

if (div( 25 , 5) === 5 ) console.log("6° Passou")
else console.log("6° Falhou")

if (div(0 , 1) === 0 ) console.log("7° Passou")
else console.log("7° Falhou")

if (div(1 , 0) === "Não é possível dividir por zero" ) console.log("8° Passou")
else console.log("8° Falhou")

if (sub(1 , 0) === 1 ) console.log("8° Passou")
else console.log("8° Falhou")

if (sub(25 , 5) === 20 ) console.log("9° Passou")
else console.log("9° Falhou")



