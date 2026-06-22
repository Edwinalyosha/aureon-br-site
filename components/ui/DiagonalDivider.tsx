interface DiagonalDividerProps {
  from: string;
  to: string;
  flip?: boolean;
}

// flip=false: triangle fills upper-right → diagonal falls left
// flip=true : triangle fills upper-left  → diagonal falls right
export function DiagonalDivider({ from, to, flip = false }: DiagonalDividerProps) {
  const points = flip ? "0,0 1440,0 0,60" : "0,0 1440,0 1440,60";
  return (
    <div style={{ background: to, overflow: "hidden" }} className="h-[40px] sm:h-[60px]">
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        <polygon points={points} fill={from} />
      </svg>
    </div>
  );
}
