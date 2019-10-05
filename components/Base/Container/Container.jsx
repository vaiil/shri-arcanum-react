import './Container.css'
import { cnContainer } from './index'

export default ({ className, children }) => (
  <div className={cnContainer(null, [className])}>
    {children}
  </div>
)
