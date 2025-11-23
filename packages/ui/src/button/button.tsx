"use client";

import cn from "classnames";
import styles from "./button.module.css";
import { ReactNode, ButtonHTMLAttributes, CSSProperties } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  appName?: string;
  theme?: Themes;
  size?: Sizes;
  block?: boolean;
}

const themes = {
  'primary': 'var(--primary)',
  'primary-alt-1': 'var(--primary-alt-1)',
  'primary-alt-2': 'var(--primary-alt-2)',
  'secondary': 'var(--secondary)',
  'secondary-alt-1': 'var(--secondary-alt-1)',
  'secondary-alt-2': 'var(--secondary-alt-2)',
  'secondary-alt-3': 'var(--secondary-alt-3)',
  'secondary-alt-4': 'var(--secondary-alt-4)',
  'focus-success': 'var(--focus-success)',
  'focus-success-light': 'var(--focus-success-light)',
  'focus-blue': 'var(--focus-blue)',
  'success': 'var(--success)',
  'danger': 'var(--danger)',
  'warning': 'var(--warning)',
  'info': 'var(--info)',
  'light': 'var(--light)',
  'dark': 'var(--dark)',
  'link': 'var(--link)',
}

const sizes = {
  'small': 'button--small',
  'medium': 'button--medium',
  'large': 'button--large',
}

export type Themes = keyof typeof themes;

export type Sizes = keyof typeof sizes;

export const Button = ({
  children,
  className,
  appName,
  theme = 'primary',
  style,
  size = 'medium',
  block = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn([
        className,
        styles.button,
        styles[sizes[size]],
        {
          [styles['button--block'] as string]: block,
        }
      ])}
      onClick={() => alert('hello')}
      style={{
        ...style,
        '--button-background': themes[theme],
      } as CSSProperties}
      {...props}
    >
      <span className={styles.buttonInner}>{children}</span>
    </button>
  );
};
