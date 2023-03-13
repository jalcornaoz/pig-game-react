import "./Player.css";
export default function Player({ titulo, score, current, active, max }) {
  const classCSS = ["player"];
  if (active) classCSS.push("player--active");
  if (score > max) classCSS.push("player--winner");

  return (
    <section className={classCSS.join(" ")}>
      <h2 className="name">{titulo}</h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current-label">Jugada actual</p>
        <p className="current-score">{current}</p>
      </div>
    </section>
  );
}
