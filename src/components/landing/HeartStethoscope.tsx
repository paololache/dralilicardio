/**
 * Decorative heart-with-stethoscope mark, drawn in burgundy.
 * Used as the focal illustration inside gradient image containers.
 */
export function HeartStethoscope({ className, size = 180 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Heart */}
      <path
        d="M100 168c-4-3-46-32-66-62C20 84 22 56 44 44c16-9 38-3 47 13 9-16 31-22 47-13 22 12 24 40 10 62-20 30-54 56-48 62Z"
        fill="currentColor"
        opacity="0.18"
      />
      {/* Stethoscope tubing */}
      <path
        d="M70 40v34a30 30 0 0 0 60 0V40"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Earpieces */}
      <circle cx="70" cy="38" r="6" fill="currentColor" />
      <circle cx="130" cy="38" r="6" fill="currentColor" />
      {/* Lower tube to chestpiece */}
      <path
        d="M100 104v28a26 26 0 0 0 26 26"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Chestpiece */}
      <circle cx="132" cy="158" r="14" stroke="currentColor" strokeWidth="6" fill="none" />
      <circle cx="132" cy="158" r="4" fill="currentColor" />
    </svg>
  );
}
