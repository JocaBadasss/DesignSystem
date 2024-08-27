import { Meta, StoryObj } from '@storybook/react';

import { Box, MultiStep, MultiStepProps } from '@joca-ui/react';

const meta: Meta<MultiStepProps> = {
  title: 'Form/Multi Step',

  component: MultiStep,
  args: { size: 4, currentStep: 1 },
  decorators: [
    (Story) => {
      return (
        <Box
          as='label'
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<MultiStepProps>;

export const Primary: Story = {
  args: {},
};
export const Full: Story = {
  args: {
    currentStep: 4,
  },
};
