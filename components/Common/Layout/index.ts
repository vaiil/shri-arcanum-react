import { cn } from '@bem-react/classname'
import Layout from './Layout'
import { IClassNameProps } from '@bem-react/core'

export const cnLayout = cn('Layout')

export interface LayoutProps extends IClassNameProps {
  title: string
}

export { Layout }
