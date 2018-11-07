/*O  operador spread permite uma 
expressão ser expandida em locais onde 
múltiplos argumentos (por chamadas de função) 
ou múltiplos elementos 
(por array literais) são esperados.*/

function mostrarNumeros(a, b, c, d) {
    console.log('numeros:', a,b,c,d,)
}

const arrayNumeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Manualmente
mostrarNumeros(arrayNumeros[0], arrayNumeros[1], arrayNumeros[2], arrayNumeros[3]);
//usando Aply
mostrarNumeros.apply(null, arrayNumeros);
/* 
Resultado:
numeros: 1 2 3 4
numeros: 1 2 3 4
*/

mostrarNumeros(...arrayNumeros);
// resultado: numeros: 1 2 3 4

let arrayLetras = ['a','b'];
let arrayNumeros1 = [1,2];
let arrayNumeros2 = [100,300];

let arraySpread = [...arrayLetras, ...arrayNumeros1, ...arrayNumeros2];
console.log('Concat com Spread:', arraySpread);
//Resultado: Concat com Spread: [ 'a', 'b', 1, 2, 100, 300 ]

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);

console.log('arr1:', arr1);
//Resultado: arr1: [ 0, 1, 2, 3, 4, 5 ]

