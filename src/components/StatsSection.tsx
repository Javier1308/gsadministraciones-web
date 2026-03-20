import { useEffect, useRef, useState } from 'react';
import { STATS } from '../data/stats';

function useCountUp(target: number, duration: number, active: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || target === 0) return;
    let start: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return count;
}

function parseStatValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!match) return { prefix: '', number: 0, suffix: value };
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] };
}

function StatItem({ stat, active }: { stat: (typeof STATS)[number]; active: boolean }) {
  const { prefix, number, suffix } = parseStatValue(stat.value);
  const count = useCountUp(number, 1400, active);

  return (
    <div style={{ textAlign: 'center', padding: '16px 32px' }}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 5vw, 64px)',
          fontWeight: 700,
          color: 'var(--white)',
          lineHeight: 1,
          marginBottom: '12px',
          letterSpacing: '-1px',
        }}
      >
        {number === 0 ? stat.value : `${prefix}${count}${suffix}`}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--silver)',
          marginBottom: '6px',
        }}
      >
        {stat.label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          fontWeight: 300,
          color: 'rgba(154,175,196,0.6)',
        }}
      >
        {stat.detail}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="metricas"
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, var(--navy-main) 0%, var(--navy-mid) 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Linea decorativa superior */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(154,175,196,0.3), transparent)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(154,175,196,0.3), transparent)',
        }}
      />

      <div className="container">
        <div
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            alignItems: 'center',
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {i > 0 && (
                <div
                  className="stat-divider"
                  style={{
                    width: '1px',
                    height: '64px',
                    background: 'rgba(154,175,196,0.2)',
                    flexShrink: 0,
                  }}
                />
              )}
              <div style={{ flex: 1 }}>
                <StatItem stat={stat} active={active} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
