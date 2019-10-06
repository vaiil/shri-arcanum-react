import { cnBreadcrumbs } from '../index'
import { cnText } from 'components/Base/Text'

export default () => (
  <div className={
    cnBreadcrumbs(
      'Separator',
      [
        cnText({ view: 'secondary' })
      ]
    )
  }>/</div>
)
