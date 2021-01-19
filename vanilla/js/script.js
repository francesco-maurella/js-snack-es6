var bike1 = {
  'marca' : 'miele',
  'modello' : 'e-cross',
  'tipo' : 'biposto elettrica',
  'ruote' : '"20 fat',
  'peso(kg)' : '26'
}

var bike2 = {
  'marca' : 'fiido',
  'modello' : 'd4s',
  'tipo' : 'citybike elettrica',
  'ruote' : '"20 normali',
  'peso(kg)' : '18'
}

var bike3 = {
  'marca' : 'cms',
  'modello' : 'f16',
  'tipo' : 'citybike elettrica',
  'ruote' : '16" normali',
  'peso(kg)' : '20'
}

var bikes = [bike1, bike2, bike3];

var maxPeso = 0

for (var i = 0; i < bikes.length; i++) {

  if (bikes[i]['peso(kg)'] > maxPeso) {
    maxPeso = bikes[i]['peso(kg)']
  }
  
}

console.log(maxPeso)
