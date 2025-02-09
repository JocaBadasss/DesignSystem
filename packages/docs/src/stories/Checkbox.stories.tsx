import { Meta, StoryObj } from '@storybook/react';

import { Box, Text, Checkbox, CheckboxProps } from '@joca-ui/react';

const meta: Meta<CheckboxProps> = {
  title: 'Form/Checkbox',

  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as='label'
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size='sm'>Accept terms of use</Text>
        </Box>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Primary: Story = {};
