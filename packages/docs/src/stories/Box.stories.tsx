import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@quasar-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <p>Elemento box</p>
      </>
    ),
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
