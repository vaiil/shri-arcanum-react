import './Text.css'
import { cnText } from './index'

export default ({ children, className }) => (
  <span className={cnText(null, [className])}>{children}</span>
)
