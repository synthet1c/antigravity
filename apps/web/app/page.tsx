import Link from 'next/link';
import { brands } from '../lib/brands';

export default function Home() {
  return (
    <div style={{
      padding: '4rem',
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Select a Brand</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {Object.entries(brands).map(([key, config]) => (
          <div key={key} style={{
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white'
          }}>
            <h2 style={{ marginTop: 0, color: config.theme.primary }}>{config.name}</h2>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              {config.locales.map((locale) => (
                <Link
                  key={locale}
                  href={`/${key}/${locale}`}
                  data-test-id={`locale_link_${key}_${locale}`}
                  style={{
                    textDecoration: 'none',
                    backgroundColor: '#f3f4f6',
                    color: '#374151',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    transition: 'background-color 0.2s'
                  }}
                >
                  {locale.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
