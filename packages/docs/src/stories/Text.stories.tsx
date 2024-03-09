import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@quasar-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia numquam veritatis laborum quod ea ut saepe velit minus vero dolor illo laudantium, et earum ipsa, soluta sit neque molestias asperiores!',
  },
} as Meta

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
