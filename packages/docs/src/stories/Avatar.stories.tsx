import { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarProps } from '@joca-ui/react';

const meta: Meta<AvatarProps> = {
  title: 'Data display/Avatar',

  component: Avatar,
  args: {
    src: 'https://github.com/JocaBadasss.png',
    alt: 'Joca Badasss',
  },

  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<AvatarProps>;

export const Primary: Story = {};
export const WithFallBack: Story = {
  args: {
    src: undefined,
  },
};
