/*
Array di oggetti di squadre di calcio.
Proprietà di ogni oggetto: nome, punti fatti, falli subiti.
Punti e falli sono settati a 0 e verranno riempiti con numeri random.
Stampare array contenene nomi squadre e falli subiti.
*/

// funzione generatrice numeri random
function getRandomNum() {
  var num = parseInt(Math.floor((Math.random() * 10) + 1));
  return num;
}


let team1 = { // squadra 1
  name : 'Metropolis Team',
  points : '0',
  fouls : '0',
}

let team2 = { // squadra 2
  name : 'Gotham Team',
  points : '0',
  fouls : '0',
}

let team3 = { // squadra 3
  name : 'Star Team',
  points : '0',
  fouls : '0',
}

const footbTeams = [team1, team2, team3]; // array di tutti i dati delle squadre
const footbTeamsFouls = []; // array riportanti nomi e i falli delle squadre

// parte un ciclo for che naviga nell'array footbTeams
for (let i = 0; i < footbTeams.length; i++) {
  footbTeams[i] = { // generiamo randomicamente punti e falli di ogni squadra
    name : footbTeams[i].name,
    points : getRandomNum(),
    fouls : getRandomNum()
  }
  let {name, fouls} = footbTeams[i]; // estrapoliamo nomi e falli
  footbTeamsFouls.push({name, fouls}); // portiamoli nell'array footbTeamsFouls
};

console.log(footbTeamsFouls); // stampiamo l'array footbTeamsFouls
