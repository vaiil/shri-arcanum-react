import { withBemMod } from '@bem-react/core'
import './Text_view_link.css'
import { TextProps } from '../index'

export const TextViewLink = withBemMod<TextProps>('Text', { view: 'link' })
