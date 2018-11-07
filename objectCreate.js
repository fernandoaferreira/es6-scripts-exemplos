const gato = {

    racaDoGato: function(){
        console.log(this.raca)
        return this.raca;
    }
    
}

const safira = Object.create(gato)
safira.raca = 'Vira Lata'
safira.racaDoGato();

const mingal = Object.create(gato)
mingal.raca = 'Siames'
let racaDoMingal = mingal.racaDoGato();

console.log('Mingael é:',racaDoMingal)

/*
Vira Lata
Siames
Mingael é: Siames
*/