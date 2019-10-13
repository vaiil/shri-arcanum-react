import Breadcrumbs from './Breadcrumbs'
import { cn } from '@bem-react/classname'
import { SingletonRouter } from 'next/router'

export const cnBreadcrumbs = cn('Breadcrumbs')

export interface BreadcrumbsProps {
  router: SingletonRouter
}


export { Breadcrumbs }
