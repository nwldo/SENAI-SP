describe("Teste de validação - Maior de idade", function(){

    it("Validação maior de idade", function(){
        expect(maioridade(20)).toBe('Maior de idade');
    })
});

describe("Teste de validação - Menor de idade", function(){
    it("Validação maior de idade", function(){
        expect(maioridade(10)).toBe('Menor de idade');
    })
});