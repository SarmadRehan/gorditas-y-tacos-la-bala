/** Stepped greca band, echoing the trim on the South Post Oak storefront awning. */
export function Greca({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={`block h-4 w-full ${className}`}>
      <defs>
        <pattern id="greca" width="32" height="16" patternUnits="userSpaceOnUse">
          <rect width="32" height="16" fill="#b4592a" />
          <path d="M0 12h8V4h8v8h8V4h8" fill="none" stroke="#d9e14a" strokeWidth="2.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#greca)" />
    </svg>
  );
}
