import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '@joca-ui/react';
import { ArrowRight } from 'phosphor-react';

const meta: Meta<ButtonProps> = {
  title: 'Form/Button',

  component: Button,
  args: {
    children: 'Send',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
};
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
};
export const Small: Story = {
  args: {
    size: 'sm',
  },
};
export const WithIcon: Story = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight='bold' />
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: 'true',
  },
};
