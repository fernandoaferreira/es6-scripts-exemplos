//Template String

let valor1 = 5;
let valor2 = 5;

let result = valor1 + valor2;

const templateString = `${valor1} + ${valor2} = ${result}`;

console.log(templateString);

//Tagged template string

let nome = 'fernando'

function caixaAlta(arrayTemplate, ...valores) {
    console.log('arrayTemplate', arrayTemplate);
    console.log('Valores', valores);
    let str = '';

    arrayTemplate.forEach( (element, indice, array) => {
        str += `${element} ${valores[indice] != undefined ? valores[indice].toUpperCase() : ''}`;
    })
    
    return str;
}

console.log(caixaAlta`Meu nome é ${nome}`);