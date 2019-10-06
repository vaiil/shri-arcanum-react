import Base from './Text'
import { cn } from '@bem-react/classname'

import { TextViewLink } from './_view/Text_view_link'
import { TextViewPrimary } from './_view/Text_view_primary'
import { TextViewSecondary } from './_view/Text_view_secondary'
import { TextViewGhost } from './_view/Text_view_ghost'

import { TextWeightMedium } from './_weight/Text_weight_medium'

import { compose } from '@bem-react/core'

export const cnText = cn('Text')

export const Text = compose(
  TextViewLink,
  TextViewPrimary,
  TextViewSecondary,
  TextViewGhost,

  TextWeightMedium
)(Base)
