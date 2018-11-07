/* O método indexOf() retorna o primeiro 
índice em que o elemento pode ser encontrado no array, 
retorna -1 caso o mesmo não esteja presente.*/

var array = [2, 5, 9];

let teste = array.indexOf(2);     // 0
let teste1 = array.indexOf(7);     // -1
let teste2 = array.indexOf(9, 2);  // 2
let teste3 = array.indexOf(2, -1); // -1
let teste4 = array.indexOf(2, -3); // 0

console.log('Existe no array: ',teste1);
console.log('Existe no array: ',teste);

/*
Existe no array:  -1
Existe no array:  0
*/

//Encontrar todas as ocorrências de um elemento

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
console.log('Lista: ', array);
var elemento = 'a';

var idx = array.indexOf(elemento);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(elemento, idx + 1);
}
console.log('Posição dos Elem Encontrados',indices);
// [0, 2, 4]