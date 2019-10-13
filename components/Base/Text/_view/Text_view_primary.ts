import { withBemMod } from '@bem-react/core'
import './Text_view_primary.css'
import { TextProps } from '../index'

export const TextViewPrimary = withBemMod<TextProps>('Text', { view: 'primary' })
