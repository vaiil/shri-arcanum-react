import { cnList, ListProps } from './index'
import './List.css'
import { FunctionComponent } from 'react'

const List: FunctionComponent<ListProps> = ({ className, children }) => (
  <ul className={cnList(null, [className])}>
    {children}
  </ul>
)

export default List
