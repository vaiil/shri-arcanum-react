import { cn } from '@bem-react/classname'
import Base from './List'
import { List_indentV_m } from './_indentV/List_indentV_m'
import { compose, IClassNameProps } from '@bem-react/core'
import ListItem from './-Item/List-Item'


export const cnList = cn('List')

export interface ListProps extends IClassNameProps {
  indentV?: 'm'
}

export const List = compose(
  List_indentV_m
)(Base)

export { ListItem }
