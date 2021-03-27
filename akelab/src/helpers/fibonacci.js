export const fibonacci = (numero) => {
  let x = 0;
  let valor = numero;
  const arreglo = [];
  valor = parseInt(valor);
  for (x; x < valor; x++) {
    if (x === 0) {
      arreglo.push(0);
    } else if (x === 1) {
      arreglo.push(1);
    } else {
      arreglo.push(arreglo[x - 1] + arreglo[x - 2]);
    }
  }
  return arreglo.join(', ');
};
