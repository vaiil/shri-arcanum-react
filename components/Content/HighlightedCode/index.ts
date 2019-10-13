import { cn } from '@bem-react/classname'
import HighlightedCode from './HighlightedCode'
import { IClassNameProps } from '@bem-react/core'

export const cnHighlightedCode = cn('HighlightedCode')

export interface HighlightedCodeProps extends IClassNameProps {
  code: string
}

export { HighlightedCode }
