import { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from '@ignite-ui/react';

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',

  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
};

export default meta;
type Story = StoryObj<HeadingProps>;

export const Primary: Story = {};
export const CustomTag: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre vai ser um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
};
