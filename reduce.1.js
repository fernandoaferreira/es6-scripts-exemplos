let orders = [
    { valor: 10 },
    { valor: 20 },
    { valor: 30 }

];

//Somando os valores
let total = orders.reduce((sum, order) => {
    console.log('sum:', sum, 'order:', order);
    return sum + order.valor
}, 0)

console.log(total);

/*
sum: 0 order: { valor: 10 }
sum: 10 order: { valor: 20 }
sum: 30 order: { valor: 30 }
60
*/