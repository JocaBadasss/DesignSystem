import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from '@ignite-ui/react';

const meta: Meta<TextProps> = {
  title: 'Typography/Text',

  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et neque non voluptatem qui, eum explicabo facere fuga doloremque aut quod praesentium vero itaque commodi dicta, cum nisi ad impedit earum.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },

    as: {
      control: {
        type: 'inline-radio',
      },
    },
  },
};

export default meta;
type Story = StoryObj<TextProps>;

export const Primary: Story = {};
export const CustomTag: Story = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
