export type Size = 'small' | 'middle' | 'large'
export type ComponentType = 'primary' | 'default' | 'dashed' | 'text' | 'link'
export type ComponentStatus = 'success' | 'warning' | 'error' | 'info'

export interface BaseComponentProps {
  size?: Size
  disabled?: boolean
  loading?: boolean
}

export interface ComponentWithType extends BaseComponentProps {
  type?: ComponentType
}

export interface ComponentWithStatus extends BaseComponentProps {
  status?: ComponentStatus
}