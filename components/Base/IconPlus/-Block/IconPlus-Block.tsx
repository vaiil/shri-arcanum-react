import { cnIconPlus } from '../index'
import './IconPlus-Block.css'
import { FC } from 'react'
import { IconPlusBlockProps } from './index'

const IconPlusBlock: FC<IconPlusBlockProps> = ({ className, children }) => (
  <span className={cnIconPlus('Block', [className])}>{children}</span>
)
export default IconPlusBlock
