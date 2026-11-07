import React from 'react';

interface SentinelLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
}

export const SentinelLogo: React.FC<SentinelLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light'
}) => {
  const sizeMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-13 sm:h-14',
    xl: 'h-18 sm:h-20'
  };

  const currentHeight = sizeMap[size];
  const logoSrc = variant === 'dark' ? '/logo-dark.webp' : '/logo-light.webp';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Official 3D Hexagonal Logo with Pixel-Perfect Alignment */}
      <img
        src={logoSrc}
        alt="Logotipo da Sentinel Systems"
        width={220}
        height={106}
        decoding="async"
        className={`${currentHeight} w-auto max-w-[46vw] sm:max-w-none object-contain`}
      />
    </div>
  );
};
export default SentinelLogo;
