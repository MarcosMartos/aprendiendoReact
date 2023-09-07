import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  //Revisamos todas las combinaciones ganadoras
  //para ver si uno de los dos gano
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]; // x u o
    }
  }

  //Si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  // Revisamos si hay empate cuadno ya no hay más espacios
  //en blanco.

  return newBoard.every((square) => square !== null);
};
