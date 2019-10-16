import Base from './Container'
import { compose, IClassNameProps } from '@bem-react/core'
import { ContainerTypeCentered } from './_type/Container_type_centered'
import { ContainerTypeFluid } from './_type/Container_type_fluid'
import { cn } from '@bem-react/classname'

export const cnContainer = cn('Container')

export interface ContainerProps extends IClassNameProps {
  type?: 'centered' | 'fluid'
}


export const Container = compose(
  ContainerTypeCentered,
  ContainerTypeFluid
)(Base)
