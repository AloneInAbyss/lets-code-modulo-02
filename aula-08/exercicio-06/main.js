// Se o valor do álcool não for menor que 70% da gasolina, não vale a pena

function calculaCombustivel(alcool, gasolina) {
  if (alcool < gasolina * 0.7) {
    return "Álcool"
  }
  return "Gasolina"
}

const resultado = calculaCombustivel(4.611, 6.007)

console.log(resultado);
