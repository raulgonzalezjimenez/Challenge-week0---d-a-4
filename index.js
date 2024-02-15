export const cortar = (x) => {
  return x.slice(1, x.length - 1);
};

export const palandrino = (y) => {
  const reverse1 = y.split('').reverse('').join('');

  return y === reverse1;
};

//3. Crea una función que cuente las vocales que contiene una palabra dada por parámetros.
export const vowels = (x) => {
  let vocales = 0;
  for (let i = 0; i < x.length; i++) {
    if (
      x[i] === 'a' ||
      x[i] === 'e' ||
      x[i] === 'i' ||
      x[i] === 'o' ||
      x[i] === 'u'
    ) {
      vocales = vocales + 1;
    }
  }
  return vocales;
};
