import { JSX } from 'react'
import styles from './colorBox.module.css';

export interface ColorBoxProps {
    background: string;
    name: string;
    dark?: boolean;
}

export const ColorBox = ({ background, name, dark = false }: ColorBoxProps): JSX.Element => {
    return (
        <div className={styles.colorBox} style={{ backgroundColor: background }}>
            <span className={styles.colorName} style={{ color: dark ? '#191919' : 'white' }}>{name}</span>
        </div>
    )
}