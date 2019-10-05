import { cn } from '@bem-react/classname'
import { compose } from '@bem-react/core'
import { DropdownWidthSmall } from './_width/Dropdown_width_small'
import { DropdownWidthMedium } from './_width/Dropdown_width_medium'

import Base from './Dropdown'

export const cnDropdown = cn('Dropdown')

export const Dropdown = compose(
  DropdownWidthSmall,
  DropdownWidthMedium
)(Base)
