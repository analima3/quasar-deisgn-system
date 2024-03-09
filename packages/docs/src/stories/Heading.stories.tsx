import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@quasar-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Heading Text',
  },
} as Meta

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading Text',
    as: 'h1',
    size: 'lg',
  },
}
