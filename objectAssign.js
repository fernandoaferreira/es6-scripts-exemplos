var original = {
    "foo": "bar"
};

var copia = Object.assign({}, original);
copia.foo = "Olá, Stack Overflow";

//O original não é afetado, pois não é mais uma referencia
console.log("original:", original);

//Exibe o copia
console.log("copia:", copia);

/*
original: { foo: 'bar' }
copia: { foo: 'Olá, Stack Overflow' }
*/