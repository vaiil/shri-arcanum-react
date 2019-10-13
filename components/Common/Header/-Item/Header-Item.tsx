import { cnHeader } from '../index'
import './Header-Item.css'
import { FC } from 'react'

const HeaderItem: FC = ({ children }) => (
  <div className={cnHeader('Item')}>
    {children}
  </div>
)

export default HeaderItem
