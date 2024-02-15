export const cortar = (x) => {
  return x.slice(1, x.length - 1);
};

export const palandrino = (y) => {
  const reverse1 = y.split('').reverse('').join('');

  return y === reverse1;
};
