const flagColors = ["#d9e14a", "#c62a2a", "#fff8ec", "#1e7a3e", "#b4592a"];
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
              <circle cx="22" cy="15" r="6" fill="#4a1a2c" opacity="0.2" />
              <path d="M10 27h24M15 32h14" stroke="#4a1a2c" strokeOpacity="0.2" strokeWidth="2.5" />
            </g>
          ))}
        </pattern>
      </defs>
      <line x1="0" y1="3" x2="100%" y2="3" stroke="#fff8ec" strokeOpacity="0.35" strokeWidth="2" />
      <rect width="100%" height="100%" fill="url(#papel-picado)" />
    </svg>
  );
}
