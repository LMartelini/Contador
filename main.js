let buttonIncrement = document.querySelector('#buttonIncrement');
let buttoDecrement = document.querySelector('#buttonDecrement');
let valor = document.querySelector('#numero');

function incrementar(){
    let novoValorIncremento = valor;
    novoValorIncremento = novoValorIncremento + 1;
    valor = novoValorIncremento;
}

function decrementar(){
    let novoValorDecremento = valor;
    novoValorDecremento = novoValorDecremento + 1;
    valor = novoValorDecremento;
    console.log('oi lais');
}

buttonIncrement.addEventListener('click', incrementar);
buttoDecrement.addEventListener('click', decrementar);


