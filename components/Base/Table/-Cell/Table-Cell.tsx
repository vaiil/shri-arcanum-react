import { cnTable } from '../index'
import './Table-Cell.css'
import { FunctionComponent } from 'react'
import { TableCellProps } from './index'

const TableCell: FunctionComponent<TableCellProps> = ({ className, children }) => (
  <div className={cnTable('Cell', [className])}>
    {children}
  </div>
)

export default TableCell
