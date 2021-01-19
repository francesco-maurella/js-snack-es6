/*
Array di oggetti di squadre di calcio.
Proprietà di ogni oggetto: nome, punti fatti, falli subiti.
Punti e falli sono settati a 0 e verranno riempiti con numeri random.
Stampare array contenene nomi squadre e falli subiti.
*/

// funzione generatrice numeri random
function getRandomNum() {
  let num = parseInt(Math.floor((Math.random() * 10) + 1));
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
  let {name} = footbTeams[i]; // estrapoliamo solo i nomi da ogni squadra
      /* --------  Che è uguale a scrivere:  --------
          let name = footbTeams[i].name
                      PROPRIETA)  name
                      VALORE) footbTeams[i].name
        -------------------------------------------- */
  footbTeams[i] = {  // generiamo randomicamente punti e falli di ogni squadra
    name,
    points : getRandomNum(),
    fouls : getRandomNum()
  }
  let {fouls} = footbTeams[i]; // estrapoliamo solo i falli
  footbTeamsFouls.push({name, fouls}); //pushamo nome e falli in footbTeamsFouls
};

// stampiamo l'array footbTeams
console.log('Footbal Teams - PUNTEGGIO');
console.log(footbTeamsFouls);
// stampiamo l'array footbTeamsFouls
console.log('Footbal Teams - FALLI');
console.log(footbTeamsFouls);
