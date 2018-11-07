function mostrarNomeCompletoRest(...nomes) {

    console.log('Qtd nome:', nomes.length);

    let nomeCompleto = '';

    nomes.forEach(function(nome){
        nomeCompleto += " " + nome;
    });

    console.log(nomeCompleto);

}

mostrarNomeCompletoRest('Fernando', 'Cris', 'Geovana');

/* Qtd nome: 3
 Fernando Cris Geovana */