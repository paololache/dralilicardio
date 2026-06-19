interface CubaFlagProps {
  className?: string;
}

export function CubaFlag({ className }: CubaFlagProps) {
  return (
    <svg
      viewBox="0 0 30 20"
      className={className}
      role="img"
      aria-label="Bandera de Cuba"
    >
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="4" y="0" fill="#0050a4" />
      <rect width="30" height="4" y="8" fill="#0050a4" />
      <rect width="30" height="4" y="16" fill="#0050a4" />
      <polygon points="0,0 13,10 0,20" fill="#d4252b" />
      <polygon
        points="4.2,10 5.13,7.13 2.69,5.36 5.71,5.36 6.65,2.5 7.58,5.36 10.6,5.36 8.16,7.13 9.09,10 6.65,8.23"
        fill="#fff"
      />
    </svg>
  );
}
