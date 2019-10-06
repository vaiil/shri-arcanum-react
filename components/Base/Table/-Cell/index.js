import Base from './Table-Cell'
import { TableCell_type_heading } from './_type/Table-Cell_type_heading'
import { compose } from '@bem-react/core'

export const TableCell = compose(
  TableCell_type_heading
)(Base)
