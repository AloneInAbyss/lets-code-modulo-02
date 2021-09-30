// Exercício 11
// Retorne as primeiras letras de cada palavra do nome 'George Raymond Richard Martin'.

function returnInitialLetters(name) {
  const splittedName = name.split(' ')
  return splittedName.reduce((acc, cur) => acc + cur[0], '')
}

console.log(returnInitialLetters('George Raymond Richard Martin'));

// Exercício 12
// Retorne cada título dentro de um h1 (por ex. <h1>Tesla Model S</h1>).

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

function returnHeadingTitles(wishlistArray) {
  return wishlistArray.map(({title}) => `<h1>${title}</h1>`);
}

console.log("Exercício 12: " + returnHeadingTitles(wishlist));

// Exercicio 13
// A partir do objeto: 
const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true}
]

// Retornar:
// {
//   under25:
//   under40:
//   under60:
// }

function getNumberOfVoters(array) {
  return array.reduce((acc, {age, voted}) => {
    if (!voted) return acc
    if (age < 25) return { under25: acc.under25++, ...acc }
    if (age < 40) return { under40: acc.under40++, ...acc }
    if (age < 60) return { under60: acc.under60++, ...acc }
    return acc
  }, {
    under25: 0,
    under40: 0,
    under60: 0,
  })
}

console.log("Exercício 13: " + JSON.stringify(getNumberOfVoters(voters)));


// Exercicio 14
// Calcule o número de todas as tarefas já concluídas
const todos = [
  {
    "userId": 10,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }, {
    "userId": 7,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": true
  }, {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }, {
    "userId": 2,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  }, {
    "userId": 2,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }, {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  }, {
    "userId": 31,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  }, {
    "userId": 90,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  }, {
    "userId": 90,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  }
];

function countCompletedTasks(array) {
  return array.reduce((acc, {completed}) => {
    if (completed) return acc + 1
    return acc
  }, 0)
}

console.log("Exercício 14: " + countCompletedTasks(todos));
