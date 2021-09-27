// Faça uma função que retorne o % de clientes felizes com a empresa (cliente feliz é aquele que deu nota maior que 7).
const customers = [
  {name: 'customer1', nps: 7},
  {name: 'customer2', nps: 3},
  {name: 'customer3', nps: 1},
  {name: 'customer4', nps: 7},
  {name: 'customer5', nps: 6},
  {name: 'customer6', nps: 9},
  {name: 'customer7', nps: 8},
  {name: 'customer8', nps: 1},
  {name: 'customer9', nps: 7},
  {name: 'customer10', nps: 7},
  {name: 'customer11', nps: 3},
  {name: 'customer12', nps: 1},
  {name: 'customer13', nps: 7},
  {name: 'customer14', nps: 6},
  {name: 'customer15', nps: 9},
  {name: 'customer16', nps: 8},
  {name: 'customer17', nps: 1},
  {name: 'customer18', nps: 7}
]

function calcularClientesFelizes(listaClientes) {
  const listaClientesFelizes = listaClientes.filter((item) => item.nps > 7);
  return listaClientesFelizes.length / listaClientes.length * 100;
}

const resultado = calcularClientesFelizes(customers).toFixed(2);

console.log(`${resultado}%`);

// const listaTeste = [
//   {nps: 7},
//   {nps: 7},
//   {nps: 7},
//   {nps: 8},
//   {nps: 8},
// ]

// const resultadoTeste = calcularClientesFelizes(listaTeste).toFixed(2);

// console.log(`${resultadoTeste}%`);