import "./Player.css";
export default function Player({ titulo, score, current, active }) {
  return (
    <section className={active ? "player player--active" : "player"}>
      <h2 className="name">{titulo}</h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current-label">Jugada actual</p>
        <p className="current-score">{current}</p>
      </div>
    </section>
  );
}
