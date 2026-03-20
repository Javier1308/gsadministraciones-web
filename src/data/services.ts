import type { Servicio, Valor } from '../types';

export const SERVICIOS: Servicio[] = [
  {
    number: '01',
    title: 'Administracion Integral',
    desc: 'Gestion completa de edificios y conjuntos residenciales con rigor y profesionalismo.',
    items: [
      'Control de mantenimiento',
      'Supervision de personal',
      'Gestion de proveedores',
      'Administracion de fondos',
    ],
  },
  {
    number: '02',
    title: 'Juntas de Propietarios',
    desc: 'Organizacion y conduccion de asambleas conforme a la normativa peruana vigente.',
    items: [
      'Convocatorias formales',
      'Redaccion de actas',
      'Seguimiento de acuerdos',
      'Asesoria legal basica',
    ],
  },
  {
    number: '03',
    title: 'Coordinacion de Recursos',
    desc: 'Gestion de pagos, cobranzas y presupuestos del edificio con plena transparencia.',
    items: [
      'Cobranza de cuotas',
      'Pago a proveedores',
      'Presupuesto anual',
      'Reportes financieros',
    ],
  },
  {
    number: '04',
    title: 'Asesoria Especializada',
    desc: 'Consultoria en normativa inmobiliaria y resolucion de conflictos entre propietarios.',
    items: [
      'Asesoria en Ley 27157',
      'Mediacion vecinal',
      'Defensa ante INDECOPI',
      'Revision de reglamentos',
    ],
  },
];

export const VALORES: Valor[] = [
  {
    title: 'Formal y Preciso',
    desc: 'Procesos documentados y reportes claros en cada gestion. Sin ambiguedades, sin letra pequena.',
  },
  {
    title: 'Confiable y Cercano',
    desc: 'Atencion directa y personalizada con el responsable del edificio en todo momento.',
  },
  {
    title: 'Experto y Seguro',
    desc: 'Conocimiento profundo de la normativa inmobiliaria peruana y amplia trayectoria comprobada.',
  },
  {
    title: 'Etico y Transparente',
    desc: 'Rendicion de cuentas detallada a la Junta de Propietarios. La honestidad no es negociable.',
  },
];
