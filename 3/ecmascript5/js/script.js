/*
Abbiamo un array contenente degli elementi.
Duplichiamo questi ultimi in un nuovo array, scegliendo, però,
solo quelli da posizione "x" a posizione "y" (che definiremo noi).
*/

// funzione elementi filtrati in nuovo array
function getFilteredArray(array, min, max) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    // se gli elementi del container sono compresi tra posizione "min" e "max"
    if (i >= (min-1) && i <= (max-1)) {
      newArray.push(array[i]) // duplichiamoli nel nuovo array
    }
  }
  return newArray;
}

// funzione scelta numerica con verifica requisiti
function getUserNumber(min, max){
  var num;
  while (!num) { // esegui ciclo finchè num è false
    num = parseInt(prompt('Inserici un numero da ' + min + ' a ' + max));
    if (isNaN(num) || num < min || num > max) {
      num = false; // se non è un numero, se minore di min, se maggiore di max
      alert('Valore inserito non valido!');
    }
  }
  return num;
}

// creiamo un primo contenitore
var container = ['A','B','C','D','E','F','G','H','I','L','M','N','O'];
var howMany = container.length; // quantità contenuti

// valore "x"
var x = getUserNumber(1, howMany);

// valore "y"
var y = getUserNumber(x, howMany);

// creiamo un nuovo array contenente gli elementi del contailer filtrati
var newContainer = getFilteredArray(container, x, y);

// stampiamo il secondo container
console.log(newContainer);
