import { cnTable } from '../index'
import './Table-Row.css'

export default ({ className, children }) => (
  <div className={cnTable('Row', [className])}>
    {children}
  </div>
)
