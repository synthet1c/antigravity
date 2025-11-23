import { brands, Brand } from '../../lib/brands';
import { notFound } from 'next/navigation';

export default async function BrandLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ brand: string }>;
}) {
    const { brand } = await params;
    const brandConfig = brands[brand as Brand];

    if (!brandConfig) {
        notFound();
    }

    const { theme } = brandConfig;

    return (
        <div
            style={
                {
                    '--primary': theme.primary,
                    '--secondary': theme.secondary,
                    '--background': theme.background,
                    '--text': theme.text,
                    minHeight: '100vh',
                    backgroundColor: 'var(--background)',
                    color: 'var(--text)',
                    fontFamily: 'system-ui, sans-serif',
                } as React.CSSProperties
            }
        >
            {children}
        </div>
    );
}
