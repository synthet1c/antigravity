import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';
import { Button } from '../../../button/button';

const meta: Meta<typeof Card> = {
    title: 'UI/Card.v2',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        children: { control: 'text' },
        noHover: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: 'Card Title',
        children: 'This is the content of the card. It can be text or any other React component.',
    },
};

export const WithFooter: Story = {
    args: {
        title: 'Card with Footer',
        children: 'This card has a footer with actions.',
        footer: (
            <>
                <Button size="small" theme="secondary">Cancel</Button>
                <Button size="small" theme="primary">Save</Button>
            </>
        ),
    },
};

export const NoHover: Story = {
    args: {
        title: 'Static Card',
        children: 'This card does not have a hover effect.',
        noHover: true,
    },
};

export const Simple: Story = {
    args: {
        children: 'A simple card without a header or footer.',
    },
};
