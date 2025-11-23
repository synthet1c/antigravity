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
                    '--primary-alt-1': theme.primaryAltTwo,
                    '--primary-alt-2': theme.primaryAltThree,
                    '--secondary': theme.secondary,
                    '--secondary-alt-1': theme.secondaryAltTwo,
                    '--secondary-alt-2': theme.secondaryAltThree,
                    '--secondary-alt-3': theme.secondaryAltFour,
                    '--secondary-alt-4': theme.secondaryAltFive,
                    '--focus-success': theme.focusSuccess,
                    '--focus-success-light': theme.focusSuccessLight,
                    '--focus-blue': theme.focusBlue,

                    '--background': theme.background,
                    '--text': theme.text,

                    '--blue': theme.blue,
                    '--green': theme.green,
                    '--orange': theme.orange,
                    '--red': theme.red,
                    '--white': theme.white,
                    '--black': theme.black,

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
