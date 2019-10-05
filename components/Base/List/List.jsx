import { cnList } from './index'
import './List.css'

export default ({ className, children }) => (
  <ul className={cnList(null, [className])}>
    {children}
  </ul>
)
