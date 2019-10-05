import Link from 'next/link'
import { cnText } from '../../../Base/Text'
import { cnBreadcrumbs } from '../index'

export default ({ href, as, children, active }) => (
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
