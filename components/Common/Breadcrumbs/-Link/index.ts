import { ReactNode } from 'react'

export interface BreadcrumbsLinkProps {
  href: string,
  as: string,
  children: ReactNode,
  active: boolean
}
