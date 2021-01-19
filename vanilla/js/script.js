/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici.
Stampare a schermo la bici con peso minore
*/

// oggetto prima bicicletta
var bike1 = {
  'marca' : 'miele',
  'modello' : 'e-cross',
  'tipo' : 'biposto elettrica',
  'ruote' : '"20 fat',
  'peso(kg)' : '26'
}

// oggetto seconda bicicletta
var bike2 = {
  'marca' : 'fiido',
  'modello' : 'd4s',
  'tipo' : 'citybike elettrica',
  'ruote' : '"20 normali',
  'peso(kg)' : '18'
}


// oggetto terza bicicletta
var bike3 = {
  'marca' : 'cms',
  'modello' : 'f16',
  'tipo' : 'citybike elettrica',
  'ruote' : '16" normali',
  'peso(kg)' : '20'
}

// array di biciclette
var bikes = [bike1, bike2, bike3];

var thisBike = bikes[0]; // bicicletta di riferimento

for (var i = 0; i < bikes.length; i++) {
  // se la bici attuale ha un peso inferiore a quella di riferimento
  if (bikes[i]['peso(kg)'] < thisBike['peso(kg)']) {
    thisBike = bikes[i]; // la meno pesante diventa quella di riferimento
  }
}

console.log(thisBike); // stampiamo la bici meno pesante
