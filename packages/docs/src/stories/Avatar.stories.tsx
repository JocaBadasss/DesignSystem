import { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarProps } from '@ignite-ui/react';

const meta: Meta<AvatarProps> = {
  title: 'Data display/Avatar',

  component: Avatar,
  args: {
    src: 'https://github.com/JocaBadasss.png',
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
