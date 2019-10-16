import { cn } from '@bem-react/classname'
import User from './User'
import { IClassNameProps } from '@bem-react/core'

export interface UserProps extends IClassNameProps{
  name: string
}

export const cnUser = cn('User')
export { User }
