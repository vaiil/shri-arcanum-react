import './Text.css'
import { cnText, TextProps } from './index'
import { FunctionComponent } from 'react'

const Text: FunctionComponent<TextProps> = ({ children, className }) => (
  <span className={cnText(null, [className])}>{children}</span>
)

export default Text
