/*
In un array abbiamo 5 studenti, aventi le proprietà:
nome, cognome, età, promosso, classe.
Creiamo un secondo array, contenente solo gli studenti bocciati.
*/

// array students, contentente oggetti di studenti
const students = [
  {
    name : 'Clark',
    surname: 'Kent',
    age: 17,
    promoted: true,
    class: 4
  },
  {
    name : 'Diana',
    surname: 'Prince',
    age: '108',
    promoted: false,
    class: 4
  },
  {
    name : 'Lex',
    surname: 'Luthor',
    age: 18,
    promoted: 'true',
    class: 5
  },
  {
    name : 'Hal',
    surname: 'Jordan',
    age: '16',
    promoted: false,
    class: 4
  },
  {
    name : 'Bruce',
    surname: 'Wayne',
    age: 18,
    promoted: 'true',
    class: 5
  }
]

console.log(students);

// filtriamo solo gli studenti bocciati
const rejectedStuds = students.filter((element) => {
  return !element.promoted;
});

console.log(rejectedStuds);
