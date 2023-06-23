'use strict';
console.log('--------------------CODING CHALLENGE--------------------');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//console.log( game );

//Task 1
//Create one player array for each team (variables 'players1' and 'players2')
const player1 = game.players[0];
const player2 = game.players[1];

console.log('Team1: ', player1);
console.log('Team2: ', player2);

//Task 2
//The first player in any player array is the goalkeeper and the others are field
//players. For Bayern Munich (team 1) create one variable ('gk') with the
//goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
//field players
const [gk, ...fielPlayers] = player1;
console.log('Goal Keeper: ', gk);
console.log('FieldPlayers: ', fielPlayers);

const [gk2, ...fielPlayers2] = player2;
console.log('Goal Keeper: ', gk2);
console.log('FieldPlayers: ', fielPlayers2);

//Task 3
//Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//Task 4
//During the game, Bayern Munich (team 1) used 3 substitute players. So create a
//new array ('players1Final') containing all the original team1 players plus
//'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('Players1 Final: ', players1Final);

//Task 5
//Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const [team1, draw, team2] = [game.odds];
//console.log('test', x1, x2, x3);

// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
console.log(team1, draw, team2);

//Task 6
//Write a function ('printGoals') that receives an arbitrary number of player
//names (not an array) and prints each of them to the console, along with the
//number of goals that were scored in total (number of player names passed in)
