import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        appName: {
            control: 'text'
        },
        children: {
            control: 'text'
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        block: {
            control: 'boolean'
        },
        theme: {
            control: {
                type: 'select',
                options: [
                    'primary',
                    'primary-alt-1',
                    'primary-alt-2',
                    'secondary',
                    'secondary-alt-1',
                    'secondary-alt-2',
                    'secondary-alt-3',
                    'secondary-alt-4',
                    'focus-success',
                    'focus-success-light',
                    'focus-blue',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                    'link'
                ],
            },
        },

    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        appName: 'Antigravity',
        children: 'Click me',
        theme: 'primary',
        size: 'medium',
        block: false,
    },
};

export const PrimaryAltTwo: Story = {
    args: {
        appName: 'Antigravity',
        children: 'Click me',
        theme: 'primary-alt-2',
        size: 'medium',
        block: false,
    },
};

