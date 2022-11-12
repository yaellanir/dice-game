export const dieSides = {
  1: require("./imgs/dice-1.png"),
  2: require("./imgs/dice-2.png"),
  3: require("./imgs/dice-3.png"),
  4: require("./imgs/dice-4.png"),
  5: require("./imgs/dice-5.png"),
  6: require("./imgs/dice-6.png"),
};

export const defaultState = {
  player1: {
    score: 0,
    name: "Player 1",
    id: "player1",
  },
  player2: {
    score: 0,
    name: "Player 2",
    id: "player2",
  },
  playerTurn: "player1",
  winner: null,
  currentTempScore: 0,
};
