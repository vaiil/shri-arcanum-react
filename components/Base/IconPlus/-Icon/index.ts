import { cn } from '@bem-react/classname'
import Base from './IconPlus-Icon'
import { compose, IClassNameProps } from '@bem-react/core'
import { IconPlusIcon_indentR_s } from './_indentR/IconPlus-Icon_indentR_s'
import { IconPlusIcon_indentR_xs } from './_indentR/IconPlus-Icon_indentR_xs'
import { IconPlusIcon_indentR_xxs } from './_indentR/IconPlus-Icon_indentR_xxs'
import { IconPlusIcon_indentL_s } from './_indentL/IconPlus-Icon_indentL_s'
import { IconPlusIcon_indentL_xs } from './_indentL/IconPlus-Icon_indentL_xs'
import { IconPlusIcon_indentL_xxs } from './_indentL/IconPlus-Icon_indentL_xxs'

export interface IconPlusIconProps extends IClassNameProps {
  indentR?: 'xss' | 'xs' | 's'
  indentL?: 'xss' | 'xs' | 's'
}

export const cnIconPlusIcon = cn('IconPlus', 'Icon')

export const IconPlusIcon = compose(
  IconPlusIcon_indentR_s,
  IconPlusIcon_indentR_xs,
  IconPlusIcon_indentR_xxs,

  IconPlusIcon_indentL_s,
  IconPlusIcon_indentL_xs,
  IconPlusIcon_indentL_xxs
)(Base)
