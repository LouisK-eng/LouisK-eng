const COLUMNS = 18;
const ROWS = 14;

// Seeded so the server and browser render the same pattern.
function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const CELLS = Array.from({ length: COLUMNS * ROWS }, (_, index) => {
  const heat = pseudoRandom(index + 1);
  return {
    hot: heat > 0.86,
    low: (0.08 + heat * 0.12).toFixed(3),
    high: (heat > 0.86 ? 0.95 : 0.2 + heat * 0.35).toFixed(3),
    delay: `${(pseudoRandom(index + 101) * -5).toFixed(2)}s`,
  };
});

// A decorative GPU-style heatmap for the hero. It carries no data.
export function ComputeGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`compute-grid gap-1.5 ${className}`}
      style={{ gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))` }}
    >
      {CELLS.map((cell, index) => (
        <span
          key={index}
          className={`compute-cell aspect-square rounded-[3px] ${
            cell.hot ? "bg-accent" : "bg-muted"
          }`}
          style={
            {
              "--low": cell.low,
              "--high": cell.high,
              "--delay": cell.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
