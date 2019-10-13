import { IconPlusIconProps, cnIconPlusIcon } from './index'
import './IconPlus-Icon.css'
import { FunctionComponent } from 'react'

const Icon: FunctionComponent<IconPlusIconProps> = ({ className, children }) => (
  <span className={cnIconPlusIcon(null, [className])}>{children}</span>
)

export default Icon
