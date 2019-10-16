import { withBemMod } from '@bem-react/core'
import './Text_view_secondary.css'
import { TextProps } from '../index'

export const TextViewSecondary = withBemMod<TextProps>('Text', { view: 'secondary' })
