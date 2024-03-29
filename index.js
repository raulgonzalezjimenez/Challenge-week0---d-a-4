//1
export const cortar = (x) => {
  return x.slice(1, -1);
};
//2
export const palandrino = (y) => {
  const loweWordinput = y.toLowerCase();
  const reverse1 = loweWordinput.split('').reverse('').join('');

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

//8 Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado.

export const year = (x) => {
  if (x < 18) {
    return 'Eres menor de edad sorry :(';
  }
  return 'Eres mayor de edad :)';
};
//9 Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.

export const simulation = () => {
  let randomNumber = Math.floor(Math.random() * 6 + 1);
  return randomNumber;
};

//11
function jugarPiedraPapelTijera(opcionUsuario) {
  var opciones = ['piedra', 'papel', 'tijera'];
  var opcionMaquina = opciones[Math.floor(Math.random() * 3)];

  var resultado = '';

  if (opcionUsuario === opcionMaquina) {
    resultado = '¡Empate!';
  } else if (
    (opcionUsuario === 'piedra' && opcionMaquina === 'tijera') ||
    (opcionUsuario === 'papel' && opcionMaquina === 'piedra') ||
    (opcionUsuario === 'tijera' && opcionMaquina === 'papel')
  ) {
    resultado = '¡Ganaste!';
  } else {
    resultado = '¡Perdiste!';
  }

  return (
    'Elegiste ' +
    opcionUsuario +
    '. La máquina eligió ' +
    opcionMaquina +
    '. ' +
    resultado
  );
}

// Ejemplo de uso:
var opcionUsuario = 'piedra'; // Puedes cambiar esto por 'papel' o 'tijera' para probar diferentes opciones
console.log(jugarPiedraPapelTijera(opcionUsuario));

// 13
export const billCalculator = (total, percentage) => {
  const tip = total * (percentage / 100);
  const totalToPay = total + tip;
  return {
    total: Math.round(total * 100) / 100,
    tip: Math.round(tip * 100) / 100,
    totalToPay: Math.round(totalToPay * 100) / 100,
  };
};

export const billRender = (total, percentage) => {
  const data = billCalculator(total, percentage);
  const formateadData = `
  Total: ${data.total.toFixed(2)}
  Propina: ${data.tip.toFixed(2)}
  --------------------------------
  Total a pagar: ${data.totalToPay.toFixed(2)}
  `;
  console.log(formateadData);
};

//14
