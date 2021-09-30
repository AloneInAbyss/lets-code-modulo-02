// Exercício 11
// Retorne as primeiras letras de cada palavra do nome 'George Raymond Richard Martin'.

function returnInitialLetters(name: String): String {
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

function returnHeadingTitles(wishlistArray: any) {
  return wishlistArray.map((element: any) => `<h1>${element.title}</h1>`);
}

console.log(returnHeadingTitles(wishlist));
