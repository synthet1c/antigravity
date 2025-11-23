import { brands, Brand } from '../../../../lib/brands';
import { notFound } from 'next/navigation';
import styles from './brand-page.module.css';
import { Hello } from '@repo/ui/hello/hello';
import React, { Suspense } from 'react';
import { ColorBox } from '@repo/ui/colorBox/colorBox';
import Link from 'next/link';

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
                <h1 className={styles.heading}>
                    <Link href="/">{brandConfig.name}</Link>
                </h1>
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
                    <h2 className={styles.themeHeading}>Theme Preview</h2>
                    <div className={styles.themePreviewContainer}>
                        <h3>Primary Colors</h3>
                        <div className={styles.themePreviewColors}>
                            <ColorBox background='var(--primary)' name='Primary' />
                            <ColorBox background='var(--primary-alt-1)' name='Primary Alt Two' />
                            <ColorBox background='var(--primary-alt-2)' name='Primary Alt Two' />
                            <ColorBox background='var(--primary-alt-3)' name='Primary Alt Three' />
                            <ColorBox background='var(--primary-alt-4)' name='Primary Alt Four' />
                            <ColorBox background='var(--primary-alt-5)' name='Primary Alt Five' />
                        </div>
                    </div>
                    <div className={styles.themePreviewContainer}>
                        <h3>Secondary Colors</h3>
                        <div className={styles.themePreviewColors}>
                            <ColorBox background='var(--secondary)' name='Secondary' />
                            <ColorBox background='var(--secondary-alt-1)' name='Secondary Alt Two' />
                            <ColorBox background='var(--secondary-alt-2)' name='Secondary Alt Two' dark />
                            <ColorBox background='var(--secondary-alt-3)' name='Secondary Alt Three' dark />
                            <ColorBox background='var(--secondary-alt-4)' name='Secondary Alt Four' dark />
                            <ColorBox background='var(--secondary-alt-5)' name='Secondary Alt Five' />
                        </div>
                    </div>
                    <div className={styles.themePreviewContainer}>
                        <h3>Focus Colors</h3>
                        <div className={styles.themePreviewColors}>
                            <ColorBox background='var(--focus-success)' name='Focus Success' />
                            <ColorBox background='var(--focus-success-light)' name='Focus Success Light' dark />
                            <ColorBox background='var(--focus-blue)' name='Focus Blue' />
                            <ColorBox background='var(--focus-blue)' name='Focus Blue' />
                        </div>
                        <h3>Background Colors</h3>
                        <div className={styles.themePreviewColors}>
                            <ColorBox background='var(--background)' name='Background' dark={true} />
                        </div>
                    </div>
                    <div className={styles.themePreviewContainer}>
                        <h3>Accent Colors</h3>
                        <div className={styles.themePreviewColors}>
                            <ColorBox background='var(--blue)' name='Blue' />
                            <ColorBox background='var(--green)' name='Green' />
                            <ColorBox background='var(--orange)' name='Orange' />
                            <ColorBox background='var(--red)' name='Red' />
                            <ColorBox background='var(--white)' name='White' />
                            <ColorBox background='var(--black)' name='Black' />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
