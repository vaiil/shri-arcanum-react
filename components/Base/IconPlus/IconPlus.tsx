import { cnIconPlus, IconPlusProps } from './index'
import { FunctionComponent } from 'react'


const IconPlus: FunctionComponent<IconPlusProps> = ({ className, children }) => (
  <span className={cnIconPlus(null, [className])}>{children}</span>
)

export default IconPlus
