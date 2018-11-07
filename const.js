const pessoa = { nome: 'Pedro', cpf: '333.333.333-33'};
console.log(pessoa);

//Podemos mudar a propriedade
pessoa.nome = 'Fernando';
console.log(pessoa);

//Não permitir alteração da propriedade
Object.defineProperties(pessoa, {
    'nome': { writable: false }
});
pessoa.nome = 'Cris';
console.log(pessoa);

/* Travando a propriedade
{ nome: 'Pedro' }
{ nome: 'Fernando' }
{ nome: 'Fernando' }
*/

//Trava todas as propriedades 
Object.freeze(pessoa);