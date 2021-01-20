/*
Si scriva una funzione che accetti tre argomenti,
un array e due numeri (A più piccolo di B).
La funzione ritornerà un nuovo array con i valori
che hanno la posizione compresa tra i due numeri
*/

// creiamo un primo contenitore
var container = ['A','B','C','D','E','F','G','H','I','L','M','N','O'];

// dichiariamo un secondo contenitore
var newContainer = [];

// valore "x"
var x = 5;

// valore "y"
var y = 10;

// duplichiamo gli elementi del container compresi tra posizione "x" e "y"
for (var i = 0; i < container.length; i++) {
  if (i >= (x+1) && i <= (y+1)) {
    newContainer.push(container[i])
  }
}

// stampiamo il secondo container
console.log(newContainer);
