import { withBemMod } from '@bem-react/core'
import './Container_type_fluid.css'
import { ContainerProps } from '../index'

export const ContainerTypeFluid = withBemMod<ContainerProps>('Container', { type: 'fluid' })
