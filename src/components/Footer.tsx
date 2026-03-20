import Logo from './Logo';

const FOOTER_LINKS = [
  { label: 'Inicio',        href: '#hero'           },
  { label: 'Nosotros',      href: '#sobre-nosotros'  },
  { label: 'Servicios',     href: '#servicios'       },
  { label: 'Contacto',      href: '#contacto'        },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--navy-deep)',
        borderTop: '1px solid rgba(154,175,196,0.12)',
      }}
    >
      <div
        className="container"
        style={{ paddingTop: '64px', paddingBottom: '64px' }}
      >
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '64px',
            marginBottom: '56px',
          }}
        >
          {/* Columna 1 — Marca */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <Logo variant="light" size="sm" />
            </div>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 300,
                color: 'var(--text-light)',
                lineHeight: 1.85,
                maxWidth: '320px',
              }}
            >
              Empresa peruana especializada en la gestion integral de edificios y
              conjuntos residenciales. Profesionalismo, transparencia y compromiso
              en cada administracion.
            </p>
          </div>

          {/* Columna 2 — Navegacion */}
          <div>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'var(--silver)',
                marginBottom: '24px',
              }}
            >
              Navegacion
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'var(--text-light)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--silver)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-light)')}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Columna 3 — Contacto */}
          <div>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'var(--silver)',
                marginBottom: '24px',
              }}
            >
              Contacto
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Jr. Felix Dibos 881',
                'Orrantia, Magdalena',
                'Lima, Peru',
                '',
                '994 174 607',
                'gabrielasarmiento1964@gmail.com',
              ].map((line, i) =>
                line === '' ? (
                  <div key={i} style={{ height: '4px' }} />
                ) : (
                  <span
                    key={i}
                    style={{
                      fontSize: '13px',
                      fontWeight: 300,
                      color: 'var(--text-light)',
                      lineHeight: 1.5,
                    }}
                  >
                    {line}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid rgba(154,175,196,0.10)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <span
            style={{
              fontSize: '11px',
              fontWeight: 300,
              color: 'rgba(194,203,219,0.5)',
              letterSpacing: '0.5px',
            }}
          >
            &copy; {new Date().getFullYear()} GS Administraciones. Todos los derechos reservados.
          </span>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 300,
              color: 'rgba(194,203,219,0.35)',
              letterSpacing: '0.5px',
            }}
          >
            Lima, Peru
          </span>
        </div>
      </div>
    </footer>
  );
}
