//Função para calcular maioridade
let maioridade = function(idade){
    if(idade <= 0){
        return 'Idade inválida';
    }
    if(idade >= 18){
        return 'Maior de idade';
    }else{
        return 'Menor de idade';
    }
}


