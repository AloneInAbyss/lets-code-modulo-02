function calcularHipotenusa(c1, c2) {
  // console.log(Math.hypot(c1, c2));
  return Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2));
}

const resultado = calcularHipotenusa(9, 12)

console.log(resultado);
