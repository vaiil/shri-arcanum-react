import { withBemMod } from '@bem-react/core'
import { TextProps } from '../index'
import './Text_weight_medium.css'

export const TextWeightMedium = withBemMod<TextProps>('Text', { weight: 'medium' })
