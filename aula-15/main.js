const pokemons = ["Charmander", "Charizard"];

// fetch('link', {
//   method: 'POST',
//   body: '',
// })

const response = fetch("link");

response
  .then((data) => "batata")
  .then((info) => console.log(info));
  // exibirá 'batata'
