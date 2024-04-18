import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$6',
  borderWidth: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
