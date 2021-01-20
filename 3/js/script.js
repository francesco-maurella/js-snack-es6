/*
Si scriva una funzione che accetti tre argomenti,
un array e due numeri (A più piccolo di B).
La funzione ritornerà un nuovo array con i valori
che hanno la posizione compresa tra i due numeri
*/

// creiamo un primo contenitore
const container = ['A','B','C','D','E','F','G','H','I','L','M','N','O'];


// valore "x"
let x = 5;

// valore "y"
let y = 10;

const newContainer = container.filter ((element, index, array) => {
  return index >= (x-1) && index <= (y-1);
})

// stampiamo il secondo container
console.log(newContainer);
