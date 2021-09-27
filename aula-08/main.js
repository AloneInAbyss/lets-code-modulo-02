console.log('Hello World!');

// Variáveis
let varString = 'Hello'
    varString = "Hi"

let varNumber = 10
    varNumber = 1.5
const      pi = 3.1415 // Não pode ser sobrescrito

let varBoolean = false
    varBoolean = true

let varUndefined // Aguardando alocação de valor
let varNull = null // Ausência de valor

const varObject = {
  cor: "amarelo",
  idade: 50
}

const varArray = [10, 20, 30]

function someMaisDois(x) {
  return x + 2;
}

console.log(someMaisDois(4));

const someMaisTres = function (x) {
  return x + 3;
}

console.log(someMaisTres(4));

console.log(varString);
console.log(varString.length);
console.log(varString.slice(0, 1));
console.log(varString.replace("Hi"));
console.log(varString.toUpperCase());
console.log(varString.indexOf('Hi'));
console.log(varString.includes('Hi'));
