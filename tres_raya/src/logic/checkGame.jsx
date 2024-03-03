export const checkEndGame = (newBoard) => {
    // revisamos si hay empate si no hay mas espacios vacios en el tablero
    // esto dice: every: si todas las posiciones son diferente de null, terminamos el tablero
    return newBoard.every((square) => square != null); // devuelve true si todos son diferentes
  };