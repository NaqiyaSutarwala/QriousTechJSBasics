// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // for (const odds of game.odds){
// //   console.log(odds);
// // }

// const [players1, players2] = game.players;
// // console.log(players1);
// // console.log(players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;

// console.log(team1);
// console.log(draw);
// console.log(team2);

// const printGoals = function (...Players) {
//   Players.map((item) => {
//     console.log(item);
//   });

//   console.log(`${Players.length} goals were scored`);
// };

// printGoals(...game.scored);

// team1 < team2 && "Team 1 is more likely to win";
// team2 < team1 && "Team 2 is more likely to win";

// for (const [index, value] of game.scored?.entries()) {
//   console.log(index + 1, value);
// }

// const { team1A, x, team2A } = game.odds;
// const average = team1 + x + team2 / 3;
// console.log(average);

// let sum = 0;

// Object.values(game.odds).forEach((item) => {
//   sum = sum + item;
//   console.log(sum);
//   console.log(sum / 3);
// });

// const numOne = 10;

// console.log(numOne === 10 || "False");

// Challenge 3
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);
const arrayValues = gameEvents.values();
const eventsSet = new Set(arrayValues);
const eventsArray = [...eventsSet];

gameEvents.delete(64);

console.log(gameEvents);
