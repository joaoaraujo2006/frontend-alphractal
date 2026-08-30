type LogoProps = {
  size?: number;
};

export function Logo({ size = 44 }: LogoProps) {
  return (
    <svg
      className="brand__mark"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Alphractal"
    >
      <g
        stroke="url(#markStroke)"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 55 L31 9" />
        <path d="M31 9 L53 55" />
        <path d="M20 38 H42" />
      </g>
      <path
        d="M35 14 C47 14 49.5 30 35.5 30"
        stroke="url(#markAccent)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <defs>
        <linearGradient id="markStroke" x1="9" y1="55" x2="53" y2="9">
          <stop stopColor="#1533c8" />
          <stop offset="0.55" stopColor="#2f7cf6" />
          <stop offset="1" stopColor="#7cc4ff" />
        </linearGradient>
        <linearGradient id="markAccent" x1="35" y1="14" x2="46" y2="30">
          <stop stopColor="#7cc4ff" />
          <stop offset="1" stopColor="#1a4fd6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
