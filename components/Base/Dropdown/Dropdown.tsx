import { cnDropdown, DropdownProps } from './index'
import './Dropdown.css'
import { FunctionComponent } from 'react'


const Dropdown: FunctionComponent<DropdownProps> = ({ children, className, isOpen = false }) => (
  <div className={cnDropdown({ isOpen }, [className])}>
    {children}
  </div>
)

export default Dropdown
