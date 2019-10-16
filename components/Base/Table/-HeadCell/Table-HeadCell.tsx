import { TableCell } from '../-Cell'
import { cnText } from '../../Text'
import { TableHeadCellProps } from './index'
import { FunctionComponent } from 'react'

const TableHeadCell: FunctionComponent<TableHeadCellProps> = ({ children, className }) => (
  <TableCell className={cnText({ view: 'ghost' }, [className])}>{children}</TableCell>
)
export default TableHeadCell
