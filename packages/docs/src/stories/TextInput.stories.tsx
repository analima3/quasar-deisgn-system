import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@quasar-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Website</Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'https://',
    placeholder: 'your-username',
  },
}
