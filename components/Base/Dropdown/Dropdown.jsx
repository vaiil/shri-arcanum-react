import { cnDropdown } from './index'
import './Dropdown.css'

export default ({ children, className, isOpen = false }) => (
  isOpen
    ?
    (
      <div className={cnDropdown(null, [className])}>
        {children}
      </div>
    )
    :
    null
)
