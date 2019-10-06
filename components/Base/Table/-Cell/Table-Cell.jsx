import { cnTable } from '../index'
import './Table-Cell.css'

export default ({ className, children }) => (
  <div className={cnTable('Cell', [className])}>
    {children}
  </div>
)
