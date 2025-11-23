import type { Meta, StoryObj } from '@storybook/react';
import { ColorBox } from './colorBox';

const meta: Meta<typeof ColorBox> = {
    title: 'UI/ColorBox',
    component: ColorBox,
    tags: ['autodocs'],
    argTypes: {
        background: { control: 'color' },
        dark: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof ColorBox>;

export const Default: Story = {
    args: {
        background: '#323E48',
        name: 'Charcoal',
        dark: false,
    },
};

export const LightBackground: Story = {
    args: {
        background: '#DEE7E8',
        name: 'Platinum',
        dark: true,
    },
};
