// 7. Processe o JSON que enviei pra vocês e me respondam em um: 
// {
//     total:, // total de alunos
//     stateCount:, // quantos estados diferentes temos
//     infosPerState: [
//         {
//             "SP": {
//                 "totalStudents":
//                 "averageAge":
//             },
//             "RJ": {
//                 "totalStudents":
//                 "averageAge":
//             }
//         }
//     ]
// }

function getStates(array) {
  // const states = [];

  // array.forEach(element => {
  //   if (!states.includes(element.state) && element.state !== '') {
  //     states.push(element.state);
  //   }
  // });

  // return states;

  // const states = [];
  // return (
  //   array.map((element) => {
  //     if (!states.includes(element.state) && element.state) {
  //       states.push(element.state);
  //       return element;
  //     }
  //   })
  // );

  return array.reduce((previousValue, currentValue) => {
    if (!previousValue.includes(currentValue.state) && currentValue.state) {
      return currentValue.state;
    }
  }, [])
}

function getInfosPerState(array, states) {
  const output = {};

  for (const item of states) {
    let totalStudents = 0;
    let sum = 0;

    array.forEach(element => {
      if (element.state === item) {
        totalStudents++;
        sum += parseInt(element.age);
      }
    });

    const averageAge = (sum / totalStudents).toFixed();

    output[item] = {
      totalStudents,
      averageAge,
    };
  }

  return output;
}

function analyseData(data) {
  const states = getStates(data.students);

  const response = {
    total: data.students.length,
    stateCount: states.length,
    infosPerState: [
      getInfosPerState(data.students, states)
    ]
  }
  
  return response;
}

const data = {
  "students": [
      {"name": "Adriana Evangelista", "state": "", "age": ""},
      {"name": "Adriano Takata", "state": "SP", "age": "30"},
      {"name": "Ana Caroline Gomes", "state": "SP", "age": "21"},
      {"name": "Antonio Moreno", "state": "SC", "age": "27"},
      {"name": "Armando de Moraes Arnaldo", "state": "CE", "age": "31"},
      {"name": "Brenno Cavalcante", "state": "SP", "age": "21"},
      {"name": "Bruno Ribeiro Da Silva", "state": "SP", "age": "19"},
      {"name": "Bruno Soares", "state": "BA", "age": "32"},
      {"name": "Carlos Alberto Victorino Junior", "state": "", "age": ""},
      {"name": "Carlos Mendes", "state": "PE", "age": "19"},
      {"name": "Carolina Daniel", "state": "", "age": ""},
      {"name": "Cristian Soares", "state": "RN", "age": "19"},
      {"name": "Domynik Vieira", "state": "MG", "age": "22"},
      {"name": "Edla Câmara", "state": "PE", "age": "21"},
      {"name": "Edwedja Lima", "state": "PE", "age": "27"},
      {"name": "Everton Reis", "state": "BA", "age": "24"},
      {"name": "Felipe Luiz Pontes de Andrade", "state": "SP", "age": "28"},
      {"name": "Felipe Rodrigues Garé Carnielli", "state": "", "age": ""},
      {"name": "Filipe Ferreira", "state": "PE", "age": "35"},
      {"name": "Francisco Márcio", "state": "CE", "age": "19"},
      {"name": "Gabriela Di Poggio", "state": "BA", "age": "24"},
      {"name": "Genilson Cavalcante de Oliveira", "state": "PB", "age": "19"},
      {"name": "Igor Ruiz de França", "state": "", "age": ""},
      {"name": "Ismália Santiago", "state": "", "age": ""},
      {"name": "Israel Cena developer", "state": "RJ", "age": "31"},
      {"name": "Jonatan Marques", "state": "RJ", "age": "25"},
      {"name": "Jordanny Alves Mizukoshi", "state": "GO", "age": "24"},
      {"name": "José Biaggio", "state": "SP", "age": "26"},
      {"name": "João Woigt Azevedo", "state": "SP", "age": "23"},
      {"name": "Jéferson Alves", "state": "SP", "age": "34"},
      {"name": "Kevin Junior Antonio Neves", "state": "PR", "age": "32"},
      {"name": "Leidson Oliveira", "state": "MG", "age": "33"},
      {"name": "Lourene Camargo", "state": "RJ", "age": "38"},
      {"name": "Luca Simaque Souza", "state": "SP", "age": "23"},
      {"name": "Lucas Suplino", "state": "RJ", "age": "29"},
      {"name": "Luiza Frota", "state": "RJ", "age": "19"},
      {"name": "Marla Ingridh", "state": "", "age": ""},
      {"name": "Mattheus Alexandre de Fabbio", "state": "", "age": ""},
      {"name": "Miller Raycell", "state": "", "age": ""},
      {"name": "Muriel Delvaux", "state": "", "age": ""},
      {"name": "Murilo Melo", "state": "RJ", "age": "29"},
      {"name": "Paulo Guilherme Damasceno", "state": "CE", "age": "24"},
      {"name": "Pedro H P Ricardo", "state": "RJ", "age": "21"},
      {"name": "Rafael Almeida", "state": "DF", "age": "30"},
      {"name": "Rafael Oliveira", "state": "RJ", "age": "30"},
      {"name": "Rafaela de Moraes Papale", "state": "MG", "age": "21"},
      {"name": "Renan Gonçalves", "state": "RJ", "age": "22"},
      {"name": "Samuel Alves", "state": "", "age": ""},
      {"name": "Samuel Cruz", "state": "CE", "age": "24"},
      {"name": "Samuel Giacomelli Bruing", "state": "RS", "age": "18"},
      {"name": "Tainá Silveira Leal", "state": "BA", "age": "28"},
      {"name": "Thiago Henrique Assi", "state": "SP", "age": "21"},
      {"name": "Vitor Henrique Grego Zillig", "state": "RS", "age": "18"}
  ]
}

console.log(analyseData(data));