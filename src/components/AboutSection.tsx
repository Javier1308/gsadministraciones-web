import { VALORES } from '../data/services';

export default function AboutSection() {
  return (
    <section id="sobre-nosotros" className="section" style={{ background: 'var(--white-cold)' }}>
      <div className="container">
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* Columna izquierda — texto */}
          <div>
            <span className="label-tag label-tag-dark">Quienes somos</span>
            <div className="accent-line" />
            <h2 className="section-title" style={{ marginBottom: '28px' }}>
              Una decada cuidando su inversion
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                lineHeight: 1.85,
                marginBottom: '20px',
              }}
            >
              GS Administraciones es una empresa peruana especializada en la gestion integral
              de edificios y conjuntos residenciales. Desde nuestra fundacion, hemos construido
              una reputacion basada en la seriedad, la transparencia y el compromiso real con
              cada propietario.
            </p>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                lineHeight: 1.85,
                marginBottom: '40px',
              }}
            >
              Operamos en San Isidro, Lima. Nuestro equipo conoce en profundidad la normativa de la Ley
              de Propiedad Horizontal y actua siempre en beneficio de la comunidad de
              propietarios que nos confian su patrimonio.
            </p>

            <div
              style={{
                paddingTop: '32px',
                borderTop: '1px solid var(--silver-light)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--navy-mid)',
                  lineHeight: 1.5,
                }}
              >
                "La honestidad en la gestion de su patrimonio no es una opcion — es nuestra
                unica forma de trabajar."
              </p>
              <p
                style={{
                  marginTop: '12px',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                Gabriela Sarmiento — Fundadora
              </p>
            </div>
          </div>

          {/* Columna derecha — pilares de valor */}
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2px',
                background: 'var(--silver-light)',
              }}
            >
              {VALORES.map((valor) => (
                <div
                  key={valor.title}
                  style={{
                    background: 'var(--white)',
                    padding: '32px 28px',
                  }}
                >
                  {/* Decorador cuadrado rotado */}
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--navy-mid)',
                      transform: 'rotate(45deg)',
                      marginBottom: '20px',
                    }}
                  />
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: 'var(--navy-main)',
                      marginBottom: '10px',
                      lineHeight: 1.3,
                    }}
                  >
                    {valor.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.7,
                    }}
                  >
                    {valor.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Dato adicional */}
            <div
              style={{
                marginTop: '2px',
                background: 'var(--navy-main)',
                padding: '28px 32px',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              <div
                style={{
                  width: '1px',
                  height: '40px',
                  background: 'var(--silver)',
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'var(--silver-mid)',
                  lineHeight: 1.7,
                }}
              >
                Administramos mas de <strong style={{ color: 'var(--white)', fontWeight: 500 }}>+15 edificios</strong> y{' '}
                <strong style={{ color: 'var(--white)', fontWeight: 500 }}>+410 departamentos</strong> en Lima,
                manteniendo estandares de gestion de alto nivel en cada uno de ellos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
