import { cnIconPlus } from '../index'
import './IconPlus-Block.css'

export default ({ className, children }) => (
  <span className={cnIconPlus('Block', [className])}>{children}</span>
)
