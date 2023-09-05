const TURNS = {
  X: "x",
  O: "o",
};

const board = Array(9).fill(null);

import "./App.css";

const Square = ({ children, updateBoard, index }) => {
  return <div className="square">{children}</div>;
};

function App() {
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
