import { cnList } from '../index'
import { ListItemProps } from './index'
import { FunctionComponent } from 'react'


const ListItem: FunctionComponent<ListItemProps> = ({ children, className }) => (
  <li className={cnList('Item', [className])}>
    {children}
  </li>
)

export default ListItem
