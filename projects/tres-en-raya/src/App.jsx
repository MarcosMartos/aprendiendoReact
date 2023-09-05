const TURNS = {
  X: "x",
  O: "o",
};

import { useState } from "react";
import "./App.css";

const Square = ({ children, updateBoard, index }) => {
  return <div className="square">{children}</div>;
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <main className="board">
      <h1>Tres en raya</h1>
      <section className="game">
        {board.map((_, index) => {
          return <Square key={index} index={index}></Square>;
        })}
      </section>
    </main>
  );
}

export default App;
