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
