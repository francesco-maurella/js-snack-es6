/*
E' appena iniziato un nuovo anno scolastico.
Dobbiamo quindi aggiornare la nostra base dati,
Aumentermo di 1 il numero incrementale della classe,
solo se lo studente è stato promosso.
Eliminiamo poi, invece, tutti coloro che hanno fatto
l'esame di maturità e non sono più in quella scuola.
*/

// array students - anno 2020, contentente oggetti di studenti
const students2020 = [
  {
    name : 'Clark',
    surname: 'Kent',
    age: 17,
    promoted: true,
    classroom: 4
  },
  {
    name : 'Diana',
    surname: 'Prince',
    age: '108',
    promoted: false,
    classroom: 4
  },
  {
    name : 'Lex',
    surname: 'Luthor',
    age: 18,
    promoted: 'true',
    classroom: 5
  },
  {
    name : 'Hal',
    surname: 'Jordan',
    age: '16',
    promoted: false,
    classroom: 4
  },
  {
    name : 'Bruce',
    surname: 'Wayne',
    age: 18,
    promoted: true,
    classroom: 5
  }
]

console.log(students2020);

// filtriamo solo gli studenti bocciati
let students2021 = students2020.map((element) => {
  let {name, surname, age, promoted, classroom} = element;
  if (promoted) {
    classroom++;
  }
  return {
    name,
    surname,
    age,
    promoted,
    classroom
  }
});

// creiamo un nuovo array dove chi è promosso, passa all'anno successivo
students2021 = students2021.filter((element) => {
  return element.classroom <= 5;
});

console.log(students2021);
