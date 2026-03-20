interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { mark: 40, wordmarkScale: 0.8 },
  md: { mark: 52, wordmarkScale: 1 },
  lg: { mark: 64, wordmarkScale: 1.2 },
};

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const { mark, wordmarkScale } = sizes[size];

  const markBg    = variant === 'dark' ? '#1C2D4F' : '#9AAFC4';
  const markText  = variant === 'dark' ? '#9AAFC4' : '#111D33';
  const wordColor = variant === 'dark' ? '#1C2D4F' : '#FFFFFF';
  const subColor  = variant === 'dark' ? '#7A88A0' : 'rgba(154,175,196,0.7)';
  const divColor  = variant === 'dark' ? '#C2CBDB' : 'rgba(154,175,196,0.4)';

  const totalH = mark;
  const gap    = Math.round(mark * 0.19);
  const wordW  = Math.round(192 * wordmarkScale);
  const totalW = mark + gap + 1 + gap + wordW;

  const mainFontSize = Math.round(16 * wordmarkScale);
  const subFontSize  = Math.round(8.5 * wordmarkScale);
  const subLetterSp  = Math.round(3 * wordmarkScale);

  const wordX   = mark + gap + 1 + gap;
  const mainY   = Math.round(totalH * 0.44);
  const subY    = Math.round(totalH * 0.70);
  const divY1   = Math.round(totalH * 0.30);
  const divY2   = Math.round(totalH * 0.75);
  const gsFontSize = Math.round(mark * 0.48);

  return (
    <svg
      width={totalW}
      height={totalH}
      viewBox={`0 0 ${totalW} ${totalH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GS Administraciones"
      role="img"
    >
      {/* Bloque isotipo */}
      <rect width={mark} height={mark} fill={markBg} />
      {/* Arco arquitectonico decorativo */}
      <path
        d={`M ${mark * 0.22} ${mark * 0.78} L ${mark * 0.22} ${mark * 0.50} A ${mark * 0.28} ${mark * 0.28} 0 0 1 ${mark * 0.78} ${mark * 0.50} L ${mark * 0.78} ${mark * 0.78}`}
        stroke={markText}
        strokeWidth="1.2"
        strokeOpacity="0.25"
        fill="none"
      />
      <text
        x={mark * 0.5}
        y={mark * 0.70}
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize={gsFontSize}
        fontWeight="700"
        fill={markText}
      >
        GS
      </text>

      {/* Divisor vertical */}
      <rect x={mark + gap} y={divY1} width="1" height={divY2 - divY1} fill={divColor} />

      {/* Wordmark */}
      <text
        x={wordX}
        y={mainY}
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize={mainFontSize}
        fontWeight="600"
        fill={wordColor}
      >
        GS Administraciones
      </text>
      <text
        x={wordX}
        y={subY}
        fontFamily="'Inter', sans-serif"
        fontSize={subFontSize}
        fontWeight="400"
        letterSpacing={subLetterSp}
        fill={subColor}
      >
        GESTION INMOBILIARIA
      </text>
    </svg>
  );
}
