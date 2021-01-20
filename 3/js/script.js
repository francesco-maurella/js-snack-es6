/*
Abbiamo un array contenente degli elementi.
Duplichiamo questi ultimi in un nuovo array, scegliendo, però,
solo quelli da posizione "x" a posizione "y" (che definiremo noi).
*/

// funzione scelta numerica con verifica requisiti
const getUserNumber = (min, max) => {
  let num;
  while (!num) { // esegui ciclo finchè num è false
    num = parseInt(prompt(`Inserisci un numero da ${min} a ${max}`));
    if (isNaN(num) || num < min || num > max) {
      num = false; // se non è un numero, se minore di min, se maggiore di max
      alert('Valore inserito non valido!');
    }
  }
  return num;
}

// creiamo un primo contenitore
const container = ['A','B','C','D','E','F','G','H','I','L','M','N','O'];
let howMany = container.length; // quantità contenuti

// valore "x"
let x = getUserNumber(1, howMany);

// valore "y"
let y = getUserNumber(x, howMany);

/* riportiamo gli elementi del container compresi tra
le posizioni "x" e "y" in un nuovo contenitore */
const newContainer = container.filter ((element, index, array) => {
  return index >= (x-1) && index <= (y-1);
});

// stampiamo il nuovo container
console.log(newContainer);
