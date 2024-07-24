import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '@ignite-ui/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {};
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
};
