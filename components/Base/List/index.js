import { cn } from '@bem-react/classname'
import Base from './List'
import { List_indentV_m } from './_indentV/List_indentV_m'
import { compose } from '@bem-react/core'
import ListItem from './-Item/List-Item'

export const cnList = cn('List')


export const List = compose(
  List_indentV_m
)(Base)

export {ListItem}
