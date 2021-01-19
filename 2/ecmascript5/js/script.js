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

var team1 = { // squadra 1
  name : 'Metropolis Team',
  points : '0',
  fouls : '0',
}

var team2 = { // squadra 2
  name : 'Gotham Team',
  points : '0',
  fouls : '0',
}

var team3 = { // squadra 3
  name : 'Star Team',
  points : '0',
  fouls : '0',
}

var footbTeams = [team1, team2, team3]; // array di tutti i dati delle squadre
var footbTeamsFouls = []; // array riportanti nomi e i falli delle squadre
var thisTeam; // dichiarazione var "questa squadra"

// parte un ciclo for che naviga nell'array footbTeams
for (var i = 0; i < footbTeams.length; i++) {
  // generiamo randomicamente punti e falli di ogni squadra
  footbTeams[i].points = getRandomNum();
  footbTeams[i].fouls = getRandomNum();
  // thisTeam è un oggetto composto solo da "nomi" e "falli"
  thisTeam = {
    name : footbTeams[i].name,
    fouls : footbTeams[i].fouls
  }
  footbTeamsFouls.push(thisTeam); //pushamo thisTeam in footbTeamsFouls
};

// stampiamo l'array footbTeams
console.log('Footbal Teams - PUNTEGGIO');
console.log(footbTeamsFouls);
// stampiamo l'array footbTeamsFouls
console.log('Footbal Teams - FALLI');
console.log(footbTeamsFouls);
