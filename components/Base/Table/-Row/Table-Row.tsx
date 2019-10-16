import { cnTable } from '../index'
import { TableRowProps } from './index'
import './Table-Row.css'
import { FunctionComponent } from 'react'

const TableRow: FunctionComponent<TableRowProps> = ({ className, children }) => (
  <div className={cnTable('Row', [className])}>
    {children}
  </div>
)

export default TableRow
