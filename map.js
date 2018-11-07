/*O objeto Map é um mapa simples de chave/valor. 
Qualquer valor (objeto e valores primitivos) 
pode ser usado como uma chave ou um valor.

Use map() quando: é preciso traduzir/mapear 
todos os elementos em um array 
para outro conjunto de valores.*/

var nomeString = 'Fernando',
    numero = 25.3,
    booleano = true,
    arrayalfabeto = ['a', 'b', 'c', 'd'],
    funcao = function () { console.log('Minha função') },
    objeto = { produto: 'Objeto' },
    regExp = /teste/gi;

const map = new Map();

//SET - map.set('Chave', 'Valor')

map.set(nomeString, numero);
map.set(booleano, arrayalfabeto);
map.set(funcao, funcao);
map.set(objeto, objeto);

let retornoMap = map.set(regExp, regExp);

console.log('Retorno do Map:', Object.prototype.toString.call(retornoMap), retornoMap);

/* Retorno do Map: [object Map] Map {
  'Fernando' => 25.3,
  true => [ 'a', 'b', 'c', 'd' ],
  [Function: funcao] => [Function: funcao],
  { produto: 'Objeto' } => { produto: 'Objeto' },
  /teste/gi => /teste/gi } */

console.log('size:', map.size);
let elemento = map.get(objeto);
console.log('Tipo do map >>>', typeof elemento);

/*
size: 5
Tipo do map >>> object
*/

let mapDelete = map.delete(nomeString);

console.log('Deletou?:', mapDelete);
//Deletou?: true

console.log('-----------forEach-------------');
/*
map.forEach(function(valor, chave, map){

})
*/

let chaves = map.keys();

console.log('Minhas chaves:', chaves);
console.log('Chave.next:', chaves.next().value);

let valores = map.values();
console.log(valores.next().value);
//[ 'a', 'b', 'c', 'd' ]

let entries = map.entries();
console.log(entries.next().value)
//[ true, [ 'a', 'b', 'c', 'd' ] ]

console.log('Clear:', map.clear());
console.log('Novo size:', map.size);
/*Clear: undefined
Novo size: 0*/

console.log('------------------Exemplo------------------')

var fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];

var celcius = fahrenheit.map(( elem ) => {
    return Math.round( ( elem - 32 ) * 5 / 9 );
} ); 

// ES6
// fahrenheit.map( elem => Math.round( ( elem - 32 ) * 5 / 9 ) );

console.log(celcius) //  [ -18, 0, 7, 10, 24, 27, 37, 49 ]



