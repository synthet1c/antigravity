'use client';

import { Button } from '@repo/ui/button';
import { ReactNode } from 'react';

interface InteractiveButtonProps {
    children: ReactNode;
    theme?: 'primary' | 'primary-alt-1' | 'primary-alt-2'; // Add other themes if needed
}

export const InteractiveButton = ({ children, theme }: InteractiveButtonProps) => {
    return (
        <Button
            theme={theme}
            onClick={() => alert('Custom interaction from Client Component!')}
        >
            {children}
        </Button>
    );
};
