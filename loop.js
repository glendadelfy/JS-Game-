alert('olá! seja bem vindo ao jogo do múmero secreto');
let qtdNumeros = parseInt(prompt('Digite a quantidade de números para o cálculo da média:'));
console.log(qtdNumeros);
let soma = 0;
let contador = qtdNumeros;

//enquanto quantidade de numeros for maior que 0 
while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += parseInt(numero);
    if (contador ===0){
        alert(`Não é possivel realizar operação`);
    }else{
        if(numero>0){
            alert(`Sua media será calculada no final`);
        }
    }contador--;
    
}
let media = soma / qtdNumeros;
alert(`Sua média é ${media.toFixed(2)}`);

console.log(media);


