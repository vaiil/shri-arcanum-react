import { withBemMod } from '@bem-react/core'
import './Dropdown_width_small.css'
import { DropdownProps } from '../index'

export const DropdownWidthSmall = withBemMod<DropdownProps>('Dropdown', { width: 'small' })
