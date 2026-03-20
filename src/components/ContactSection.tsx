import { useState } from 'react';

interface FormState {
  nombre: string;
  telefono: string;
  email: string;
  edificio: string;
  mensaje: string;
}

const INITIAL: FormState = { nombre: '', telefono: '', email: '', edificio: '', mensaje: '' };

const inputStyle: React.CSSProperties = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  fontWeight: 400,
  color: 'var(--navy-main)',
  background: 'var(--white)',
  border: '1.5px solid var(--silver-light)',
  borderRadius: '1px',
  padding: '13px 16px',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: '11px',
  fontWeight: 500,
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  color: 'var(--text-muted)',
  marginBottom: '8px',
};

function Field({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
}: {
  label: string;
  id: keyof FormState;
  type?: string;
  value: string;
  onChange: (id: keyof FormState, val: string) => void;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          borderColor: focused ? 'var(--navy-mid)' : 'var(--silver-light)',
        }}
      />
    </div>
  );
}

function Textarea({
  label,
  id,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  id: keyof FormState;
  value: string;
  onChange: (id: keyof FormState, val: string) => void;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder={placeholder}
        rows={5}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          resize: 'vertical',
          borderColor: focused ? 'var(--navy-mid)' : 'var(--silver-light)',
        }}
      />
    </div>
  );
}

// SVG icons inline
const IconPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL);

  const handleChange = (id: keyof FormState, val: string) => {
    setForm((prev) => ({ ...prev, [id]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta de ${form.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nTelefono: ${form.telefono}\nCorreo: ${form.email}\nEdificio: ${form.edificio}\n\n${form.mensaje}`
    );
    window.location.href = `mailto:gabrielasarmiento1964@gmail.com?subject=${subject}&body=${body}`;
  };

  const CONTACT_ITEMS = [
    { icon: <IconPin />,       label: 'Direccion',          value: 'Jr. Felix Dibos 881, Orrantia, Magdalena, Lima', href: undefined },
    { icon: <IconPhone />,     label: 'Telefono',            value: '994 174 607',                                    href: 'tel:+51994174607' },
    { icon: <IconWhatsApp />,  label: 'WhatsApp',            value: '+51 994 174 607',                                href: 'https://wa.me/51994174607' },
    { icon: <IconMail />,      label: 'Correo electronico',  value: 'gabrielasarmiento1964@gmail.com',                href: 'mailto:gabrielasarmiento1964@gmail.com' },
  ];

  return (
    <section id="contacto" className="section section-pale">
      <div className="container">
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* Columna izquierda — datos */}
          <div>
            <span className="label-tag label-tag-dark">Contacto</span>
            <div className="accent-line" />
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Hablemos sobre su edificio
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginBottom: '48px',
              }}
            >
              Estamos disponibles para atender sus consultas y brindarle informacion
              detallada sobre nuestros servicios de gestion inmobiliaria.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'var(--navy-main)',
                      color: 'var(--silver)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '2.5px',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        marginBottom: '4px',
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{
                          fontSize: '14px',
                          color: 'var(--navy-main)',
                          fontWeight: 400,
                          lineHeight: 1.6,
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--navy-mid)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--navy-main)')}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div style={{ fontSize: '14px', color: 'var(--navy-main)', fontWeight: 400, lineHeight: 1.6 }}>
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — formulario */}
          <div
            style={{
              background: 'var(--white)',
              padding: '48px 44px',
              borderTop: '2px solid var(--navy-main)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--navy-main)',
                marginBottom: '32px',
              }}
            >
              Envie su consulta
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                className="form-row"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
              >
                <Field label="Nombre completo" id="nombre" value={form.nombre} onChange={handleChange} placeholder="Juan Perez" />
                <Field label="Telefono" id="telefono" type="tel" value={form.telefono} onChange={handleChange} placeholder="9XX XXX XXX" />
              </div>

              <Field label="Correo electronico" id="email" type="email" value={form.email} onChange={handleChange} placeholder="correo@ejemplo.com" />
              <Field label="Edificio o direccion" id="edificio" value={form.edificio} onChange={handleChange} placeholder="Nombre o direccion del edificio" />
              <Textarea label="Mensaje o consulta" id="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Describa brevemente su consulta..." />

              <button type="submit" className="btn btn-primary-dark" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
