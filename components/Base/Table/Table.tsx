import { cnTable, TableProps } from './index'
import './Table.css'
import { FunctionComponent } from 'react'


const Table: FunctionComponent<TableProps> = ({ children, className }) => (
  <div className={cnTable(null, [className])}>
    {children}
  </div>
)

export default Table
