import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarImageProps } from '@quasar-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/analima3.png',
    alt: 'User Ana Lima',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const Primary: StoryObj<AvatarImageProps> = {}

export const WithFallback: StoryObj<AvatarImageProps> = {
  args: {
    src: undefined,
  },
}
