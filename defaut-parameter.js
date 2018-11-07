//problema

function exibirMsg(nome) {

    nome = nome || 'cliente';

    let msg = 'Olá ' + nome + ' seja bem vindo';
    console.log(msg);
}

exibirMsg();
//Olá undefined seja bem vindo

//--------------------------------------
//solucão com ES6

function exibirMsgES6(nome = 'cliente') {
    
    let msg = 'Olá ' + nome + ' seja bem vindo';
    console.log(msg);
}

exibirMsgES6();