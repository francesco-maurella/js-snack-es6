/*
Si scriva una funzione che accetti tre argomenti,
un array e due numeri (A più piccolo di B).
La funzione ritornerà un nuovo array con i valori
che hanno la posizione compresa tra i due numeri
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

// funzione scelta numerica con limite minimo e massimo
function getUserNumber(min, max){
  var num;
  while (!num) { // esegui ciclo finchè num è false
    num = parseInt(prompt('Inserici un numero da ' + min + ' a ' + max));
    if (isNaN(num)) { // se num non è un intero
      num = false;
      alert('Ammessi solo caratteri numerici!');
    } else { // se invece è un intero
      if (num < min) {
        num = false; // non deve essere minore di min
        alert('Ammessi solo numeri maggiori di ' + min);
      }
      if (num > max) {
        num = false; // non deve essere maggiore di max
        alert('Ammessi solo numeri fino a ' + max);
      }
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
var y = getUserNumber(x, howMany)

// creiamo un nuovo array contenente gli elementi del contailer filtrati
var newContainer = getFilteredArray(container, x, y);

// stampiamo il secondo container
console.log(newContainer);
