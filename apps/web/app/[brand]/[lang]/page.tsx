import { brands, Brand } from '../../../lib/brands';
import { notFound } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import styles from './brand-page.module.css';
import { Hello } from '@repo/ui/hello/hello';
import React, { Suspense } from 'react';

export default async function BrandPage({
    params,
}: {
    params: Promise<{ brand: string; lang: string }>;
}) {
    const { brand, lang } = await params;
    const brandConfig = brands[brand as Brand]!;

    console.log({ brand, lang });

    if (!brandConfig) {
        notFound();
    }

    if (!brandConfig.locales.includes(lang)) {
        return (
            <div style={{ padding: '2rem' }}>
                <h1>Locale not supported</h1>
                <p>
                    The locale "{lang}" is not supported for {brandConfig.name}.
                </p>
                <p>Supported locales: {brandConfig.locales.join(', ')}</p>
            </div>
        );
    }

    const t = (key: string) => key;

    // Initialize i18next with brand namespace and set language
    // const { t } = useTranslation(brand);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.heading}>{brandConfig.name}</h1>
                <span className={styles.heading}>
                    {lang.toUpperCase()}
                </span>
            </header>

            <main className={styles.main}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Hello who="foonty" />
                </Suspense>
                <h2 className={styles.welcome}>{t('welcome')}</h2>
                <p className={styles.description}>{t('description')}</p>
                <div className={styles.themePreview}>
                    <h3>Theme Preview</h3>
                    <div className={styles.themePreviewColors}>
                        <div className={styles.column}>
                            <div className={styles.colorBox} style={{ backgroundColor: 'var(--primary)' }}></div>
                            <span className={styles.colorName}>Primary</span>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.colorBox} style={{ backgroundColor: 'var(--secondary)' }}></div>
                            <span className={styles.colorName}>Secondary</span>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.colorBox} style={{ backgroundColor: 'var(--background)', border: '1px solid #ccc' }}></div>
                            <span className={styles.colorName}>Bg</span>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.colorBox} style={{ backgroundColor: 'var(--text)' }}></div>
                            <span className={styles.colorName}>Text</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
