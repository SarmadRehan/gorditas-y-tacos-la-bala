const flagColors = ["#d62828", "#ffd60a", "#ffffff", "#2a9d5c", "#f77f00"];
const flagWidth = 56;

/** A string of papel picado flags, the cut-paper bunting hung in taquerías. Tiles to any width. */
export function PapelPicado({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={`block h-14 w-full ${className}`}>
      <defs>
        <pattern
          id="papel-picado"
          width={flagWidth * flagColors.length}
          height="56"
          patternUnits="userSpaceOnUse"
        >
          {flagColors.map((color, index) => (
            <g key={color} transform={`translate(${index * flagWidth + 6} 4)`}>
              <path d="M0 0h44v38l-5.5 7-5.5-7-5.5 7-5.5-7-5.5 7-5.5-7-5.5 7-5.5-7z" fill={color} />
              <circle cx="22" cy="15" r="6" fill="#0d5c32" opacity="0.2" />
              <path d="M10 27h24M15 32h14" stroke="#0d5c32" strokeOpacity="0.2" strokeWidth="2.5" />
            </g>
          ))}
        </pattern>
      </defs>
      <line x1="0" y1="3" x2="100%" y2="3" stroke="#1b1712" strokeOpacity="0.35" strokeWidth="2" />
      <rect width="100%" height="100%" fill="url(#papel-picado)" />
    </svg>
  );
}
