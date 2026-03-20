export default function HeroSection() {

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'var(--navy-deep)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Video de fondo local */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
          }}
        >
          <source src="https://archive.org/download/drone-lima/DroneLima.mp4" type="video/mp4" />
        </video>
        {/* Capa de oscurecimiento para legibilidad del texto */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(17,29,51,0.72)',
          }}
        />
      </div>

      {/* Decorador geometrico de fondo */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          opacity: 0.06,
          pointerEvents: 'none',
          zIndex: 1,
        }}
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Arco de columnas arquitectonico */}
        <rect x="60"  y="220" width="40" height="280" fill="#9AAFC4" />
        <rect x="200" y="220" width="40" height="280" fill="#9AAFC4" />
        <rect x="340" y="220" width="40" height="280" fill="#9AAFC4" />
        <rect x="480" y="220" width="40" height="280" fill="#9AAFC4" />
        <path d="M60 220 Q 140 100 240 220" stroke="#9AAFC4" strokeWidth="2" fill="none" />
        <path d="M200 220 Q 280 100 380 220" stroke="#9AAFC4" strokeWidth="2" fill="none" />
        <path d="M340 220 Q 420 100 520 220" stroke="#9AAFC4" strokeWidth="2" fill="none" />
        <line x1="0" y1="500" x2="600" y2="500" stroke="#9AAFC4" strokeWidth="1" />
        <line x1="0" y1="510" x2="600" y2="510" stroke="#9AAFC4" strokeWidth="0.5" />
      </svg>

      {/* Arco decorativo superior derecho */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-160px',
          right: '-160px',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          border: '1px solid rgba(154,175,196,0.12)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          border: '1px solid rgba(154,175,196,0.07)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 'var(--nav-height)' }}>
        <div
          className="hero-content"
          style={{ maxWidth: '680px', paddingTop: '48px', paddingBottom: '80px' }}
        >
          {/* Label superior */}
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color: 'var(--silver)',
              display: 'block',
              marginBottom: '28px',
            }}
          >
            Gestion Inmobiliaria · San Isidro, Lima, Peru
          </span>

          {/* Titulo principal */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(52px, 7vw, 88px)',
              fontWeight: 900,
              color: 'var(--white)',
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              marginBottom: '0',
            }}
          >
            Administramos
          </h1>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(52px, 7vw, 88px)',
              fontWeight: 900,
              fontStyle: 'italic',
              color: 'var(--silver)',
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              marginBottom: '36px',
            }}
          >
            su patrimonio.
          </h1>

          {/* Subtitulo */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              fontWeight: 300,
              color: 'var(--silver-mid)',
              lineHeight: 1.85,
              maxWidth: '520px',
              marginBottom: '52px',
            }}
          >
            Gestion integral de edificios y conjuntos residenciales con precision,
            transparencia y experiencia comprobada en San Isidro, Lima.
          </p>

          {/* Botones CTA */}
          <div
            className="hero-buttons"
            style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}
          >
            <a href="#contacto" className="btn btn-primary">
              Solicitar informacion
            </a>
            <a href="#sobre-nosotros" className="btn btn-ghost">
              Conocer mas
            </a>
          </div>

          {/* Stats rapidos */}
          <div
            style={{
              marginTop: '72px',
              paddingTop: '36px',
              borderTop: '1px solid rgba(154,175,196,0.15)',
              display: 'flex',
              gap: '48px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '+15',  label: 'Edificios' },
              { value: '+410', label: 'Departamentos' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'var(--white)',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 400,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'var(--silver)',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
