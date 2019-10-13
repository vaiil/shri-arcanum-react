import Link from 'next/link'
import { cnText } from 'components/Base/Text'
import { cnBreadcrumbs } from '../index'
import { BreadcrumbsLinkProps } from './index'
import './Breadcrumbs-Link.css'
import { FC } from 'react'

const BreadcrumbLink: FC<BreadcrumbsLinkProps> = ({ href, as, children, active }) => (
  !active
    ?
    <Link
      href={href}
      as={as}><a
      className={
        cnBreadcrumbs('' +
          'Link',
          [
            cnText({ view: 'secondary' })
          ]
        )
      }>{children}</a></Link>
    :
    <span className={
      cnBreadcrumbs('' +
        'Link',
        [
          cnText({ view: 'primary', weight: 'medium' })
        ]
      )
    }>{children}</span>
)

export default BreadcrumbLink
