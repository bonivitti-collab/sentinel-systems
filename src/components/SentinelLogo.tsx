interface SentinelLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  variant?: 'light' | 'dark';
  mark?: boolean;
}

export function SentinelLogo({
  className = '',
  size = 'md',
  variant = 'light',
  mark = false,
}: SentinelLogoProps) {
  const sizeMap = {
    sm: 'h-10 sm:h-12',
    md: 'h-12 sm:h-14',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
    hero: 'h-40 w-auto sm:h-48 lg:h-56',
  };

  const currentHeight = sizeMap[size];
  const logoSrc = mark
    ? '/emblema-sentinel-novo.png'
    : variant === 'dark'
      ? '/logo-dark.webp'
      : '/logo-light.webp';
  const width = mark ? 570 : 220;
  const height = mark ? 668 : 106;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt={mark ? 'Emblema da Sentinel Systems' : 'Logotipo da Sentinel Systems'}
        width={width}
        height={height}
        decoding="async"
        className={`${currentHeight} w-auto max-w-[70vw] sm:max-w-none object-contain`}
      />
    </div>
  );
}

export default SentinelLogo;
