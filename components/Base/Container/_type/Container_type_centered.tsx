import { withBemMod } from '@bem-react/core'
import './Container_type_centered.css'
import { ContainerProps } from '../index';

export const ContainerTypeCentered = withBemMod<ContainerProps>('Container', { type: 'centered' })
