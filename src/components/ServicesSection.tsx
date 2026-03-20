import { SERVICIOS } from '../data/services';

export default function ServicesSection() {
  return (
    <section id="servicios" className="section section-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorador de fondo */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '1px solid rgba(154,175,196,0.07)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-120px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '1px solid rgba(154,175,196,0.04)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Encabezado */}
        <div style={{ marginBottom: '64px' }}>
          <span className="label-tag">Nuestros servicios</span>
          <div className="accent-line accent-line-light" />
          <h2
            className="section-title section-title-light"
            style={{ maxWidth: '560px' }}
          >
            Gestion integral en cada aspecto de su edificio
          </h2>
        </div>

        {/* Grid de servicios */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2px',
            background: 'rgba(154,175,196,0.08)',
          }}
        >
          {SERVICIOS.map((servicio) => (
            <div
              key={servicio.number}
              style={{
                background: 'var(--navy-deep)',
                padding: '40px 32px',
                borderTop: '2px solid var(--silver)',
                transition: 'background 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'var(--navy-main)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'var(--navy-deep)';
              }}
            >
              {/* Numero decorativo */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '56px',
                  fontWeight: 700,
                  color: 'rgba(154,175,196,0.18)',
                  lineHeight: 1,
                  marginBottom: '24px',
                  letterSpacing: '-1px',
                }}
              >
                {servicio.number}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '19px',
                  fontWeight: 600,
                  color: 'var(--white)',
                  marginBottom: '14px',
                  lineHeight: 1.3,
                }}
              >
                {servicio.title}
              </h3>

              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'var(--silver-mid)',
                  lineHeight: 1.75,
                  marginBottom: '28px',
                }}
              >
                {servicio.desc}
              </p>

              {/* Divisor */}
              <div
                style={{
                  width: '32px',
                  height: '1px',
                  background: 'rgba(154,175,196,0.3)',
                  marginBottom: '24px',
                }}
              />

              {/* Lista de items */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {servicio.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '12px',
                      color: 'rgba(154,175,196,0.7)',
                      paddingLeft: '18px',
                      position: 'relative',
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '2px',
                        width: '8px',
                        height: '1px',
                        background: 'var(--silver)',
                        display: 'block',
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
