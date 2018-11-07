const weakMap = new WeakMap();

let objeto1 = {teste1: 'teste1'}
let objeto2 = {teste2: 'teste2'}
let objeto3 = {teste3: 'teste3'}
let objeto4 = {teste4: 'teste4'}

//Só aceita objetos

weakMap.set(objeto1, 'string');
weakMap.set(objeto2, true);

const teste = weakMap.get(objeto1);
console.log(teste);// string

console.log(weakMap.has(objeto2));// true




