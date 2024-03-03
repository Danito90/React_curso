import { useState, useEffect } from "react";
// npm install canvas-confetti -E
import confetti from "canvas-confetti";

import { Board } from "./componentes/Board.jsx";
import { Square } from "./componentes/Square";
import { TURNS } from "./constantes";
import { checkWinnerFrom } from "./logic/board";
import { WinnerModal } from "./componentes/WinnerModal.jsx";
import { checkEndGame } from "./logic/checkGame.jsx";
import {
  saveGameToStorage,
  resetGameStorage,
} from "./storage/localstorage.jsx";

import "./App.css";

function App() {
  /* Estados */

  const [board, setBoard] = useState(() => {
    // verificamos el estado antes de asignarle el estado inicial, si tenemos
    // guardado en el localstorage, se carga este estado
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const currentTurn = window.localStorage.getItem("turn");
    if (currentTurn) {
      return JSON.parse(currentTurn);
    } else {
      return TURNS.X;
    }
  });

  // null no hay ganador, false empate, true ganador
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    // debemos setear sus estados a sus valores iniciales
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    // Borramos el localstorage
    resetGameStorage();
  };

  const updateBoard = (index) => {
    // no actualizamos la casilla si ya tiene  un valor asignado, o si ya hay un ganador
    if (board[index] || winner) return;

    // Trabajamos sobre cada casilla, que valor tiene o debe tener
    const newBoard = [...board]; //copia bord en newboard
    // bord[index] = turn -> esto esta mal, porques las props y el estado "son inmutables"
    newBoard[index] = turn; //X u O
    setBoard(newBoard);

    // Trabajamos sobre de quien es el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);

    if (newWinner) {
      confetti();
      // Aca a la hora de ver el ganador cuidado! porque los estados son asincronos!
      // alert(`El ganador es ${newWinner}`);
      // Podemos no ver el ganador. Con el siguiente codigo evitamos esto
      setWinner(newWinner);
      // console.log(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // empate
    }
  };

  useEffect(() => {
    // Guardar partida en localstorage
    saveGameToStorage({
      board: board,
      turn: turn,
    });
    console.log(`Siguiente turno: ${turn}`);
    console.log(`Tablero: ${board}`);
  }, [turn, board]);

  return (
    <>
      <main className="board">
        <h1>Ta Te Ti</h1>
        <button onClick={resetGame}>Empezar de nuevo</button>

        <Board board={board} updateBoard={updateBoard}></Board>

        <section className="turn">
          <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
        </section>

        <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
      </main>
    </>
  );
}

export default App;
