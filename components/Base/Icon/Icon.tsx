import { cnIcon, IconProps } from './index'
import './Icon.css'
import { FunctionComponent } from 'react'

const Icon: FunctionComponent<IconProps> = ({ type, className, onClick }) => (
  <span className={cnIcon({ type }, [className])} onClick={onClick}/>
)

export default Icon
