//Classes
class DepositoEstacionamento{
    constructor(idDoElemento){
        this.inputElement = document.getElementById(idDoElemento);
        this.valor = 0;
    }

        capturarValor(){
    const valorDigitado = this.inputElement.value;
    const valorNumerico = parseFloat(valorDigitado);

    if(!isNaN(valorNumerico)){
        return valorNumerico;
    } else{
        console.error('valor inserido não é um número válido');
        return null;
    }
}

}
//Recarregar a página
function recaregarPagina() {
  window.location.reload();
}

//criar as const
const enterMoney = new DepositoEstacionamento('deposito');
const buttonElement = document.getElementById('button');
const analiseDiv = document.getElementById('analise')

//fazer o botão armazenar valor
buttonElement.addEventListener('click',() =>{
    const valorNumerico = enterMoney.capturarValor();
    const valorFormatado = (valorNumerico !== null) ? valorNumerico.toFixed(2) : null;

    if(valorFormatado === null){
        capturarValor.textContent = `Coloque um valor válido!`;
    }else if (valorNumerico === 1) {
        analiseDiv.textContent = `Com o valor de R$ ${valorFormatado}, você poderá ficar no estacionamento por 30 minutos. Após isso, faça uma recarga ou retire seu veículo!`;
    } else if (valorNumerico === 1.75) {
        analiseDiv.textContent = `Com o valor de R$ ${valorFormatado}, você poderá ficar no estacionamento por 1 hora. Após isso, faça uma recarga ou retire seu veículo!`;
    } else if (valorNumerico === 3) {
        analiseDiv.textContent = `Com o valor de R$ ${valorFormatado}, você poderá ficar no estacionamento por 2 horas. Após isso, faça uma recarga ou retire seu veículo!`;
    } else if(valorNumerico > 3){
        analiseDiv.textContent = `Por favor, faça uma transferência válida de R$ 1,00, R$ 1,75 ou R$ 3,00.`;
    } else{
        analiseDiv.textContent =`Por favor, faça uma transferência válida de R$ 1,00, R$ 1,75 ou R$ 3,00.`
    }
    }
    );
