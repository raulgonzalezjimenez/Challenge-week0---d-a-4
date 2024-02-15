//1
export const cortar = (x) => {
  return x.slice(1, x.length - 1);
};
//2
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

//4. Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama (contiene todas las letras del abecedario).
//El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja
// abcdefghijklmnñopqrstuvwxz=^[a-zA-Z]+$

// 5 Escribe una función que compruebe si una cadena de texto contiene todas las vocales.

export const allvowels = (x) => {
  x = x.toLowerCase();
  const vocalesSet = new Set();

  for (let i = 0; i < x.length; i++) {
    const bar = x[i];

    if ('aeiou'.includes(bar)) {
      vocalesSet.add(bar);
    }
  }

  return vocalesSet.size === 5;
};

//6 Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

export const countdown = (x) => {
  let down = [];
  for (let i = x; i >= 0; i--) {
    down.push(i);
  }
  return down;
};

//7 Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.

export const old = (x) => {
  const date = new Date();
  const year = date.getFullYear();
  let person = year - x;
  return person;
};
