const newPromise = new Promise((resolve, reject) => {
  try {
    setTimeout(() => resolve("Sucesso!"), 1000);
  } catch {
    reject("Erro!");
  }
});

console.log(newPromise);
newPromise
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.log(erro))

// CHAMADA HTTP
const response = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
response
  .then((data) => data.json())
  .then((results) => console.log(results))
  .catch((erro) => console.log(erro))
