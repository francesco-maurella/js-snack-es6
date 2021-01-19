/*
Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare,
le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti
Infine usando la destrutturazione creiamo un nuovo array i cui elementi
contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// funzione generatrice numeri random
function getRandomNum() {
  var num = parseInt(Math.floor((Math.random() * 10) + 1));
  return num;
}

let team1 = {
  name : 'Metropolis Team',
  points : '0',
  fouls : '0',
}

let team2 = {
  name : 'Gotham Team',
  points : '0',
  fouls : '0',
}

let team3 = {
  name : 'Star Team',
  points : '0',
  fouls : '0',
}

const footbTeams = [team1, team2, team3];
const footbTeamsFouls = [];


for (let i = 0; i < footbTeams.length; i++) {
  footbTeams[i] = {
    name : footbTeams[i].name,
    points : getRandomNum(),
    fouls : getRandomNum()
  }
  let {name, fouls} = footbTeams[i];
  footbTeamsFouls.push({name, fouls});
};

console.log(footbTeamsFouls);
