// Faça uma função que calcule o preço médio dos elementos que compõe a cesta de produtos: 
// const productsPrice = [28, 33, 42, 14, 10, 88, 95, 100, 29]

function calcularPrecoMedio(produtos) {
  let soma = 0;
  for (let index = 0; index < produtos.length; index++) {
    soma += produtos[index];
  }
  return soma / produtos.length;
}

const resultado = calcularPrecoMedio([28, 33, 42, 14, 10, 88, 95, 100, 29]).toFixed(0);

console.log(resultado);