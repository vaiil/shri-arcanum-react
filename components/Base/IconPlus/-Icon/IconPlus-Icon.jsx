import { cnIconPlus } from '../index'
import './IconPlus-Icon.css'

export default ({ className, children }) => (
  <span className={cnIconPlus('Icon', [className])}>{children}</span>
)
