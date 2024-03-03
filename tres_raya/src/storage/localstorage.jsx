export const saveGameToStorage = ({ board, turn }) => {
  // Guardar partida en localstorage
  // guardamos estado del tablero
  window.localStorage.setItem("board", JSON.stringify(board));
  //guardamos estado del turno
  window.localStorage.setItem("turn", JSON.stringify(turn));
};

export const resetGameStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
