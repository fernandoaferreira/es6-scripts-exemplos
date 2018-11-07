console.log('#This em escopo de de exceção global');

// executar no navegador
// console.log('this == windows', this == window); //true

var nome = 'Paulo';

function fnNome() {
    let nome = 'fernando';
    console.log('this.nome: ', this.nome); //undefined
    console.log('nome: ', nome); //fernando
}

fnNome(); //window invoca função

let pessoaObjetoLiteral = {
    nome: 'Fernando',
    exibirThis: function () {
        console.log('This escopo objeto literal: ', this);
    }
}

pessoaObjetoLiteral.exibirThis();

/* This escopo objeto literal: 
 { nome: 'Fernando', exibirThis: [Function: exibirThis] } */

console.log('#################################');

function Pessoa(nome) {
    this.nome = nome;
    this.exibirThis2 = function () {
        console.log('This escopo objeto função construtora: ', this);
    }
}

let objPessoa = new Pessoa('Maria');

objPessoa.exibirThis2();
/* This escopo objeto função construtora:  
Pessoa { nome: 'Maria', exibirThis2: [Function] } */