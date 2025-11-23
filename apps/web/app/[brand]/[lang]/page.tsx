import { brands, Brand } from '../../../lib/brands';
import { notFound } from 'next/navigation';
import styles from './brand-page.module.css';
import { Hello } from '@repo/ui/hello';
import React, { Suspense } from 'react';
import Link from 'next/link';
import { Card } from '@repo/ui/card';
import { Button } from '@repo/ui/button';

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
                    <Hello who="foonta" />
                </Suspense>
                <h2 className={styles.welcome}>{t('welcome')}</h2>
                <p className={styles.description}>{t('description')}</p>
                <section className={styles.cards}>
                    <Card.v1
                        className={styles.card}
                        title="Card Version 1"
                        footer={<Button>Button</Button>}
                    >
                        <p>Card one content</p>
                    </Card.v1>
                    <Card
                        className={styles.card}
                        title="Card Version 2"
                        footer={<Button>Button</Button>}
                    >
                        <p>Card two content</p>
                    </Card>
                    <Card
                        className={styles.card}
                        title="Card Version 2"
                        footer={<Button theme="secondary">Button</Button>}
                    >
                        <p>Card three content</p>
                    </Card>
                </section>
            </main>
        </div>
    )
}
