/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici.
Stampare a schermo la bici con peso minore
*/

// oggetto prima bicicletta
let bike1 = {
  'modello' : 'miele e-cross',
  'peso' : '26'
}

// oggetto seconda bicicletta
let bike2 = {
  'modello' : 'fiido d4s',
  'peso' : '18'
}

// oggetto terza bicicletta
let bike3 = {
  'modello' : 'cms f16',
  'peso' : '20'
}

// array di biciclette
const bikes = [bike1, bike2, bike3];

let thisBike = bikes[0]; // bicicletta di riferimento

for (var i = 0; i < bikes.length; i++) {
  let {modello, peso} = bikes[i]
  // se la bici attuale ha un peso inferiore a quella di riferimento
  if (peso < thisBike.peso) {
    thisBike = bikes[i]; // la meno pesante diventa quella di riferimento
  }
}

let {modello, peso} = thisBike;

console.log(`La bicicletta più leggera è ${modello}: ${peso} Kg`);
