import "./App.css";
import { useState } from "react";
import Player from "./Player";

function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [current, setCurrent] = useState(0);
  //activePlayer será 1 o 2
  const [activePlayer, setActivePlayer] = useState(1);
  const [dice, setDice] = useState(0);
  const PUNTUACION_MAXIMA = 100;

  const iniciar = () => {
    setScore1(0);
    setScore2(0);
    setCurrent(0);
    setActivePlayer(1);
    setDice(0);
  };

  const lanzarDado = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    setDice(num);
    if (num !== 1) {
      setCurrent(current + num);
    } else {
      setCurrent(0);
      setActivePlayer(activePlayer === 1 ? 2 : 1);
    }
  };

  const mantener = () => {
    if (Math.max(score1, score2) + current < PUNTUACION_MAXIMA)
      setActivePlayer(activePlayer === 1 ? 2 : 1);
    if (activePlayer === 1) {
      setScore1((score1) => score1 + current);
    } else {
      setScore2((score2) => score2 + current);
    }
    setCurrent(0);
  };

  return (
    <main>
      <Player
        titulo={score1 > PUNTUACION_MAXIMA ? "WINNER" : "Jugador 1"}
        score={score1}
        current={activePlayer === 1 ? current : 0}
        active={activePlayer === 1}
        max={PUNTUACION_MAXIMA}
      />
      <Player
        titulo={score2 > PUNTUACION_MAXIMA ? "WINNER" : "Jugador 2"}
        score={score2}
        current={activePlayer === 2 ? current : 0}
        active={activePlayer === 2}
        max={PUNTUACION_MAXIMA}
      />
      {dice !== 0 && (
        <img src={`dice-${dice}.png`} alt="Playing dice" className="dice" />
      )}
      <button className="btn btn--new" onClick={iniciar}>
        🔄 Nuevo juego
      </button>
      <button
        className="btn btn--roll"
        onClick={lanzarDado}
        disabled={Math.max(score1, score2) > PUNTUACION_MAXIMA}
      >
        🎲 Tirar dado
      </button>
      <button
        className="btn btn--hold"
        onClick={mantener}
        disabled={Math.max(score1, score2) > PUNTUACION_MAXIMA}
      >
        📥 Mantener
      </button>
    </main>
  );
}

export default App;
