import { TableCell } from '../-Cell'
import { cnText } from '../../Text'

export default ({ children, className }) => (
  <TableCell className={cnText({ view: 'ghost' }, [className])}>{children}</TableCell>
)
