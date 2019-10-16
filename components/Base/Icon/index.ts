import { cn } from '@bem-react/classname'
import { IClassNameProps } from '@bem-react/core'
import Icon from './Icon'
import { MouseEventHandler } from 'react'

export const cnIcon = cn('Icon')

export interface IconProps extends IClassNameProps {
  onClick?: MouseEventHandler,
  type?: string
}

export { Icon }
