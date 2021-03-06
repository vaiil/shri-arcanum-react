import { cn } from '@bem-react/classname'
import { compose, IClassNameProps } from '@bem-react/core'
import { DropdownWidthSmall } from './_width/Dropdown_width_small'
import { DropdownWidthMedium } from './_width/Dropdown_width_medium'

import Base from './Dropdown'

export interface DropdownProps extends IClassNameProps {
  isOpen?: boolean,
  width?: string
}

export const cnDropdown = cn('Dropdown')

export const Dropdown = compose(
  DropdownWidthSmall,
  DropdownWidthMedium
)(Base)
