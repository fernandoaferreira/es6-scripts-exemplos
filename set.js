/*O objeto Set permite que você armazene 
valores únicos de qualquer tipo, 
desde valores primitivos a referências a objetos.

Objetos Set são coleções de valores nas quais 
é possível iterar os elementos em ordem de inserção. 
Um valor no Set pode ocorrer apenas uma vez; ele 
é único na coleção do Set.*/

var myArray = ["value1", "value2", "value3"];

// Use o construtor regular de Set para transformar um array dentro de um Set
var mySet = new Set(myArray);

let existe = mySet.has("value1"); // retorna true
console.log('Valor no array existe:', existe);
//Valor no array existe: true


const set = new Set([1, 2, 3]);

set.add(23);
set.add('teste');
set.add(true);
set.add({ teste: 'testeObjeto' });
set.add(['10', '20']);

set.add(new Map().set('testeMap', 'testeMap'));

console.log('Verificando dados: ', set.add(false));

/*
Verificando dados:  Set {
  1,
  2,
  3,
  23,
  'teste',
  true,
  { teste: 'testeObjeto' },
  [ '10', '20' ],
  Map { 'testeMap' => 'testeMap' },
  false }
  */


console.log('size:', set.size)
//size: 10

console.log('set.delete: ', set.delete(1));
//set.delete:  true

console.log('Verificar se existe: ', set.has(2));
//Verificar se existe:  true

// set.forEach((valor, chave, set) => {

//     console.log('Chave:', chave, 'valor:', valor);
//     /*
//     Chave: 2 valor: 2
//     Chave: 3 valor: 3
//     Chave: 23 valor: 23
//     Chave: teste valor: teste
//     Chave: true valor: true
//     Chave: { teste: 'testeObjeto' } valor: { teste: 'testeObjeto' }
//     Chave: [ '10', '20' ] valor: [ '10', '20' ]
//     Chave: Map { 'testeMap' => 'testeMap' } valor: Map { 'testeMap' => 'testeMap' }
//     Chave: false valor: false
//     */
// });

console.log('-------------------------------');

for(let [chave, valor] of set.entries()) {

    console.log('Chave:', chave, 'valor:', valor);

    /*
    Chave: 2 valor: 2
    Chave: 3 valor: 3
    Chave: 23 valor: 23
    Chave: teste valor: teste
    Chave: true valor: true
    Chave: { teste: 'testeObjeto' } valor: { teste: 'testeObjeto' }
    Chave: [ '10', '20' ] valor: [ '10', '20' ]
    Chave: Map { 'testeMap' => 'testeMap' } valor: Map { 'testeMap' => 'testeMap' }
    Chave: false valor: false
    */

}

console.log('-------------------------------');

