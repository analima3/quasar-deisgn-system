import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@quasar-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Element box</Text>
      </>
    ),
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
