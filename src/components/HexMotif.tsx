interface HexMotifProps {
  className?: string;
  opacity?: number;
  gid?: string;
}

/** Contorno hexagonal no mesmo recorte do emblema (vértice no topo). */
export function HexMotif({ className = '', opacity = 0.12, gid = 'hex-stroke' }: HexMotifProps) {
  return (
    <svg
      viewBox="0 0 200 230"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gid} x1="20" y1="10" x2="180" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#04D4E4" />
          <stop offset="0.45" stopColor="#1652AC" />
          <stop offset="1" stopColor="#4A33B1" />
        </linearGradient>
      </defs>
      <polygon
        points="100,8 188,58 188,168 100,218 12,168 12,58"
        stroke={`url(#${gid})`}
        strokeWidth="3"
        opacity={opacity}
      />
      <polygon
        points="100,28 170,68 170,158 100,198 30,158 30,68"
        stroke={`url(#${gid})`}
        strokeWidth="1.5"
        opacity={opacity * 0.7}
      />
    </svg>
  );
}

export default HexMotif;
