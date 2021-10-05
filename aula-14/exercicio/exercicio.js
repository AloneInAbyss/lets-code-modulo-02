// Pegue as informações dos seguintes pokemons e agrupe-os por seus tipos:
const pokemons = [
  'Charmander',
  'Charizard',
  'Pikachu',
  'Raichu',
  'Squirtle',
  'Blastoise',
  'Bulbasaur',
  'Venusaur'
]

const pokemons_info = {
  fire: [],
  electric: [],
  water: [],
  grass: [],
};

pokemons.reduce((previousPromise, nextPokemon) => {
  return (
    previousPromise
      .then(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextPokemon.toLowerCase()}`)
          .then((data) => data.json())
          .then((response) => {
            const type = response.types[0].type.name;
            pokemons_info[type].push(response.name);
            if (nextPokemon === pokemons[pokemons.length-1])
              console.log(pokemons_info);
          });
      })
  )
}, Promise.resolve());

// {
//   fire: ['Charmander'],
//   electric: ['Pikachu', 'Zapdos'],
//   water: ['Squirtle', 'Blastoise'],
//   poison: ['Bulbasaur']
// }
