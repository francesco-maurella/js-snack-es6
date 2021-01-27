/*
Durante l'estate la nostra scuola organizzava una nuova promettente
squadra di calcio a 5.
Per decidere chi sarebbe stato il suo capitano la direzione
scolastica si affidava sìa alle qualità dello studente, che alla sorte.
Estrarre casualmente uno studente tra tutti quelli promossi.
*/

// funzione generatrice numeri random
function getRandomNum(max) {
  var getResult = parseInt(Math.floor((Math.random() * max)));
  return getResult;
}

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

// filtriamo solo gli studenti promossi
const promotedStuds = students.filter((element) => {
  return element.promoted;
})

// selezioniamo a caso l'index di uno dei promossi
const footbLeader = promotedStuds[getRandomNum(promotedStuds.length)]

console.log(footbLeader);
