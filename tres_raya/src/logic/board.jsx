import { WINNER_COMBOS } from "../constantes"

export const checkWinnerFrom = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras para evaluar si hay ganador
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // si no hay ganador
    return  null;
  };