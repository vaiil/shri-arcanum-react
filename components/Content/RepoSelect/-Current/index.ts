import { IClassNameProps } from '@bem-react/core'
import { MouseEventHandler } from 'react'

export interface RepoSelectCurrentProps extends IClassNameProps {
  current: string | null,
  onClick: MouseEventHandler
}
