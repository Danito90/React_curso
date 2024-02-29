import { Square } from "./Square";

export const Board = ({ board, updateBoard }) => {
  return (
    <section className="game">
      {
        /* _ se descarta el primer argumento. Devuelve cada cuadradito con su posicion */
        board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })
      }
    </section>
  );
};
