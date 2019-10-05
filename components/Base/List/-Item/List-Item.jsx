import { cnList } from '../index'

export default ({ children, className }) => (
  <li className={cnList('Item', [className])}>
    {children}
  </li>
)
