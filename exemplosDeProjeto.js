// Exemplo 1  que só não deu certo por causa do async/await que não funciona do forEach

// Original 
for (x = 0; x < assinaturasAzure.length; x++) {
    recursos = null;
    link = assinaturasAzure[x].link;

    recursos = await saldoAtual.usoAtualdeRecursos(link, tokenCsp);

    for (var i = 0; i < recursos.length; i++) {
        if (recursos[i].quantityUsed !== 0 || recursos[i].totalCost !== 0) {

            recursosUtilizados.push(recursos[i]);

        } else {
            continue;
        }
    }

};

//ES6 funcional

await assinaturasAzure.forEach(async function(assinatura) {
    recursos = null;
    link = assinatura.link;

    recursos = await saldoAtual.usoAtualdeRecursos(link, tokenCsp);

    recursosUtilizados = recursos.filter((item) => item.quantityUsed > 0 || item.totalCost > 0);

});

// ===================================

// Exemplo 2 for e if substiruido pelo filter

//Original
let recursosUtilizados = [];

    for (var i = 0; i < recursos.length; i++) {
        if (recursos[i].quantityUsed !== 0 || recursos[i].totalCost !== 0) {

            recursosUtilizados.push(recursos[i]);

        } else {
            continue;
        }
    }


//ES6 funcional

recursosUtilizados = recursos.filter((recursos) => recursos.quantityUsed > 0 || recursos.totalCost > 0);

