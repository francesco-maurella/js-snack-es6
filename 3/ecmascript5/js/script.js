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

// creiamo un primo contenitore
var container = ['A','B','C','D','E','F','G','H','I','L','M','N','O'];

// valore "x"
var x = 5;

// valore "y"
var y = 10;

// creiamo un nuovo array contenente gli elementi del contailer filtrati
var newContainer = getFilteredArray(container, x, y);

// stampiamo il secondo container
console.log(newContainer);
