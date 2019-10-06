import { cnTable } from './index'
import './Table.css'

export default ({ children, className }) => (
  <div className={cnTable(null, [className])}>
    {children}
  </div>
)
