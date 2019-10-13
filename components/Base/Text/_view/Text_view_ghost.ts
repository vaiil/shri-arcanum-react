import { withBemMod } from '@bem-react/core'
import './Text_view_ghost.css'
import { TextProps } from '../index'

export const TextViewGhost = withBemMod<TextProps>('Text', { view: 'ghost' })
