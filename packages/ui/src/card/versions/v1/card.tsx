import React from 'react';
import styles from './card.module.css';

export interface CardProps {
    /**
     * The title of the card
     */
    title?: React.ReactNode;
    /**
     * The content of the card
     */
    children: React.ReactNode;
    /**
     * Optional footer content
     */
    footer?: React.ReactNode;
    /**
     * Additional class name for the card container
     */
    className?: string;
    /**
     * Whether to remove the hover effect
     */
    noHover?: boolean;
}

export const Card = ({ title, children, footer, className, noHover = false }: CardProps) => {
    return (
        <div className={`${styles.card} ${noHover ? '' : styles.hover} ${className || ''}`}>
            {title && (
                <div className={styles.header}>
                    {typeof title === 'string' ? <h3 className={styles.title}>{title}</h3> : title}
                </div>
            )}
            <div className={styles.body}>
                {children}
            </div>
            {footer && (
                <div className={styles.footer}>
                    {footer}
                </div>
            )}
        </div>
    );
};
