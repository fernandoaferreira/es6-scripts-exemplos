/*O método filter() cria um novo array com todos
 os elementos que passaram no teste implementado
 pela função fornecida.
 
 Use filter() quando: é preciso remover elementos 
 indesejados com base em alguma(s) condição(ões).*/

let students = [
    { 
      name: "david", 
      GPA: 3.3 
    }, 
    { 
      name: "sheila", 
      GPA: 3.1 
    }, 
    { 
      name: "Alonzo", 
      GPA: 3.65 
    }, 
    { 
      name: "Mary", 
      GPA: 3.8 
    }
  ] 
  
  let admitted =[]; 
  
  for (let i=0; i < students.length; i++){ 
    if(students[i].gpa > 3.2){
        admitted.push(students[i]); 
    } 
      
  } 

  console.log(admitted);
  
  /*admitted = [
    { 
      name: "david", 
      GPA: 3.3 
    }, 
    { 
      name: "Alonzo", 
      GPA: 3.65 
    }, 
    { 
      name: "Mary", 
      GPA: 3.8 
    }
  ];*/

  // Utilizando FILTER

  let students = [
    { 
      name: "david", 
      GPA: 3.3 
    }, 
    { 
      name: "sheila", 
      GPA: 3.1 
    }, 
    { 
      name: "Alonzo", 
      GPA: 3.65 
    }, 
    { 
      name: "Mary", 
      GPA: 3.8 
    }
  ] 
  
  let admitted = students.filter((student) => {
     return student.gpa > 3.2;
  })

  console.log(admitted);
  
  /*admitted = [
    { 
      name: "david", 
      GPA: 3.3 
    }, 
    { 
      name: "Alonzo", 
      GPA: 3.65 
    }, 
    { 
      name: "Mary", 
      GPA: 3.8 
    }
  ];*/

  /*O método indexOf() retorna o primeiro índice em que 
  o elemento pode ser encontrado no array, 
  retorna -1 caso o mesmo não esteja presente.
  
  >>>remover elementos duplicados*/

var uniqueProducts = array.filter( function( elem, i, array ) {
    return array.indexOf( elem ) === i;
});

// ==========================================================

// usado no projeto for com filter

for (x = 0; x < uniqueCategory.length; x++) {

  let recursosCategoria = recursosUtilizados.filter((item) => {
      return item.category == uniqueCategory[x];
  });

  recursosPorCategoria[cont] = {categoria: uniqueCategory[x], recursos: recursosCategoria }

  cont++
}

//Substituindo for por forEach e com filter

let recursosPorCategoria = []

uniqueCategory.forEach(function (categoria, indice) {

  let recursosCategoria = recursosUtilizados.filter((item) => {
      return item.category == categoria;
  });

  recursosPorCategoria[indice] = { categoria: categoria, recursos: recursosCategoria }

});