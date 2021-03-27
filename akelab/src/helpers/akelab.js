export const akelab = (numero) => {
  let numeros = [];
  for (let i = 1; i <= numero; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numeros[i] = 'AKELAB';
    } else if (i % 3 === 0) {
      numeros[i] = 'AKE';
    } else if (i % 5 === 0) {
      numeros[i] = 'LAB';
    } else {
      numeros[i] = i;
    }
  }
  return numeros.join(', ').slice(1);
};
