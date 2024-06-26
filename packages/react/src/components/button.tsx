import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  padding: '0 $4',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
  svg: {
    width: '$4',
    height: '$4',
  },
  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$green',
        '&:not(:disabled):hover': {
          background: '$yellow',
        },
        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        color: '$yellow',
        border: '2px solid $green',
        '&:not(:disabled):hover': {
          background: '$green',
          color: '$white',
        },
        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',
        '&:not(:disabled):hover': {
          color: '$white',
        },
        '&:disabled': {
          color: '$gray600',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = 'Button'
