import {compose} from '@bem-react/core';
import Base from './Container';
import {ContainerTypeCentered} from './_type/Container_type_centered'

export const Button = compose(
    ContainerTypeCentered
)(Base)
