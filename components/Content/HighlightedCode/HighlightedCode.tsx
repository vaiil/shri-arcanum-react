import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import './HighlightedCode.css'
import { cnHighlightedCode, HighlightedCodeProps } from './index'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/github-gist'
import { FC } from 'react'

const HighlightedCode: FC<HighlightedCodeProps> = ({ code }) => (
  <SyntaxHighlighter language="js"
                     style={style}
                     className={cnHighlightedCode()}
                     customStyle={{ margin: 0 }}
                     showLineNumbers={true}>
    {code}
  </SyntaxHighlighter>
)
export default HighlightedCode
