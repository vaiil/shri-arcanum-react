import { cnHeader } from '../index'
import './Header-Item.css'

export default ({ children }) => (
  <div className={cnHeader('Item')}>
    {children}
  </div>
)
