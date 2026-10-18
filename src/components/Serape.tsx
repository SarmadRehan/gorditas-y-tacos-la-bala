/** Striped band echoing the serape tablecloth in the restaurant's food photos. */
export function Serape({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-3 bg-[repeating-linear-gradient(90deg,#d62828_0_28px,#ffd60a_28px_36px,#0d5c32_36px_52px,#ffffff_52px_56px,#1d4ed8_56px_68px,#f77f00_68px_80px,#d62828_80px_96px,#7b2cbf_96px_104px)] ${className}`}
    />
  );
}
