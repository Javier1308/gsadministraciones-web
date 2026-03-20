import { useState, useEffect } from 'react';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'Inicio',         href: '#hero'           },
  { label: 'Nosotros',       href: '#sobre-nosotros'  },
  { label: 'Servicios',      href: '#servicios'       },
  { label: 'Contacto',       href: '#contacto'        },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 'var(--nav-height)',
          background: scrolled ? 'rgba(17,29,51,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(154,175,196,0.12)' : 'none',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        <div
          className="container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a href="#hero" aria-label="GS Administraciones — inicio">
            <Logo variant="light" size="sm" />
          </a>

          {/* Desktop links */}
          <div
            className="nav-links-desktop"
            style={{ display: 'flex', alignItems: 'center', gap: '36px' }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(235,240,246,0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#9AAFC4')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(235,240,246,0.8)')}
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="btn btn-ghost" style={{ padding: '10px 24px' }}>
              Contactenos
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menu' : 'Abrir menu'}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '24px',
                  height: '1.5px',
                  background: 'var(--silver-mid)',
                  transition: 'transform 0.2s, opacity 0.2s',
                  transform:
                    mobileOpen && i === 0
                      ? 'rotate(45deg) translate(5px, 5px)'
                      : mobileOpen && i === 2
                      ? 'rotate(-45deg) translate(4px, -5px)'
                      : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        style={{
          position: 'fixed',
          top: 'var(--nav-height)',
          left: 0,
          right: 0,
          background: 'rgba(17,29,51,0.98)',
          backdropFilter: 'blur(16px)',
          zIndex: 99,
          padding: '32px 24px 48px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-8px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
          transition: 'transform 0.25s, opacity 0.25s',
          borderBottom: '1px solid rgba(154,175,196,0.12)',
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 400,
              color: 'var(--silver-mid)',
              textDecoration: 'none',
              padding: '14px 0',
              borderBottom: '1px solid rgba(154,175,196,0.08)',
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contacto"
          onClick={handleLinkClick}
          className="btn btn-ghost"
          style={{ marginTop: '24px', alignSelf: 'flex-start' }}
        >
          Contactenos
        </a>
      </div>
    </>
  );
}
