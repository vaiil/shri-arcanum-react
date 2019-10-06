import { cnDropdown } from './index'
import './Dropdown.css'

export default ({ children, className, isOpen = false }) => (
  <div className={cnDropdown({ isOpen }, [className])}>
    {children}
  </div>
)
