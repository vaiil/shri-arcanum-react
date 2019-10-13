import { cn } from '@bem-react/classname'
import FileViewer from './FileViewer'
import { FileViewerInfoBarProps } from './-InfoBar'

export const cnFileViewer = cn('FileViewer')

export interface FileViewerProps extends FileViewerInfoBarProps {
}

export { FileViewer }
