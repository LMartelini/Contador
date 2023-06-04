let buttonIncrement = document.querySelector('#buttonIncrement');
let buttoDecrement = document.querySelector('#buttonDecrement');
let valor = document.querySelector('#numero');

novoValor = 0;

function incrementar(){
    let novoValor = Number(valor.innerHTML);
    novoValor = novoValor + 1;
    valor.innerHTML = novoValor;
}

function decrementar(){
    let novoValor = Number(valor.innerHTML);
    novoValor = novoValor - 1;
    valor.innerHTML = novoValor;
}

buttonIncrement.addEventListener('click', incrementar);
buttoDecrement.addEventListener('click', decrementar);


