
describe("Teste Calculadora", function(){
    
    it("Somas válidas", function(){
        expect(soma(1,2)).toBe(3)
    })

});

describe("Teste Calculadora", function(){
    
    it("Somas inválidas", function(){
        expect(soma(9,1)).not.toBe(5)
    })

    
});

describe("Teste Calculadora", function(){

    it("Subtrações válidas", function(){
        expect(subtracao(5,2)).toBe(3)
    })
});

describe("Teste Calculadora", function(){

    it("Mutiplicações válidas", function(){
        expect(mult(1,2)).toBe(2)
    })
});

describe("Teste Calculadora", function(){

    it("Divisões válidas", function(){
        expect(divisao(6,2)).toBe(3)
    })
});
