alert('olá! seja bem vindo ao jogo do múmero secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1; 

//enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    
    //Se chute fpr igual ao número secreto
    if (chute == numeroSecreto){
        break;
    } else{
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`);
        }else{
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas = tentativas +1;
        tentativas ++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1){
//     alert(`Isso ai você descobriu o numero secreto ${numeroSecreto} com ${tentativas}`);
// }else {
//     alert(`Isso ai você descobriu o numero secreto ${numeroSecreto} com ${tentativa}`);
// }
