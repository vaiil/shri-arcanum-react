import Base from './Container'
import { compose } from '@bem-react/core'
import { ContainerTypeCentered } from './_type/Container_type_centered'
import { ContainerTypeFluid } from './_type/Container_type_fluid'
import { cn } from '@bem-react/classname'

export const cnContainer = cn('Container')
export const Container = compose(
  ContainerTypeCentered,
  ContainerTypeFluid
)(Base)
