
describe("Teste da calculadora ", ()=>{
    
it("Soma sem calc", ()=>{
    expect(2 + 2 ).toBe(4);
})

//somar com import do index
const calculadora = require("../src/index")
it("Calculadora está definida", ()=>{
    expect(calculadora.soma).toBeDefined();
})
it("2 + 3 = 5", ()=>{
    expect(calculadora.soma(2,3)).toBe( 5 );
})
it("-67 + -43 = -110", ()=>{
    expect(calculadora.soma(-67 , -43)).toBe( -110 );
})

//subtrair
it("67 - 43 = 24", ()=>{
    expect(calculadora.sub(67 , 43)).toBe( 24 );
})
it("67 - -43 = 110", ()=>{
    expect(calculadora.sub(67 , -43)).toBe( 110 );
})
it("-67 - -43 = -24", ()=>{
    expect(calculadora.sub(-67 , -43)).toBe( -24 );
})

//teste de maioridade 
it("se a >= b, então a - b >=0", ()=>{
    expect(calculadora.sub()).toBeDefined;
    expect(calculadora.sub( 2 , 1)).toBeGreaterThanOrEqual(0);
    expect(calculadora.sub( 2 , 1)).toBeLessThan(5);
})



//multi 
it("5 * 5 = 25", ()=>{
    expect(calculadora.multi(5 , 5)).toBe( 25 );
})
it("100 * -2 = -200", ()=>{
    expect(calculadora.multi(100 , -2)).toBe( -200 );
})
it("20 * 0 = 0", ()=>{
    expect(calculadora.multi(20 , 0)).toBe(0);
})

//multi maioridade
it("Se a > b e ambos são positivos, a * b < 0 ", ()=>{
    expect(calculadora.multi(100 , 2)).toBeGreaterThan(0);
})
it("Se a > b e ambos são negativos, a * b > 0 ", ()=>{
    expect(calculadora.multi(-100 , -2)).toBeGreaterThan(0);
})
it("Se a > b, a > 0, b < 0, então a * b < 0 ", ()=>{
    expect(calculadora.multi(20 , -3)).toBeLessThan(0);
})
it("Se a >= b, então a * b >= b * b", ()=>{
    expect(calculadora.multi(6 , 5)).toBeGreaterThanOrEqual(calculadora.multi(5 , 5));
})

//dividir 
it("25 / 5 = 5", ()=>{
    expect(calculadora.div(25 , 5)).toBe( 5 );
})
it("100 / 2 = 50", ()=>{
    expect(calculadora.div(100 , -2)).toBe( -50 );
})
it("20 / 0 = undefined", ()=>{
    expect(calculadora.div(20 , 0)).toBe( undefined );
})

//dividir maioridade
it("Se a > b e b < 0, então a / b > 0", ()=>{
    expect(calculadora.div(25 , 5)).toBeGreaterThan( 0 );
})
it("Se a > b e b > 0, então a / b > b / a", ()=>{
    expect(calculadora.div(20 , 2)).toBeGreaterThan(calculadora.div(2 , 20));
})
it("Se a > b e b > 0, então a + b / a < a + b / b", ()=>{
    let a = 20
    let b = 2
    expect(calculadora.div(calculadora.soma(a , b),a)).toBeLessThan(calculadora.div(calculadora.soma(a , b),b));
})
})