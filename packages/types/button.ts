import type { ComponentWithType } from './common'

export interface ButtonProps extends ComponentWithType {
  htmlType?: 'button' | 'submit' | 'reset'
  block?: boolean
  danger?: boolean
  ghost?: boolean
  shape?: 'default' | 'circle' | 'round'
  icon?: string
  href?: string
  target?: string
}

export interface ButtonSlots {
  default?: () => any
  icon?: () => any
}