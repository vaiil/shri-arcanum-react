const SyntaxHighlighter = require('react-syntax-highlighter/dist/cjs/default-highlight')
import './HighlightedCode.css'
import { cnHighlightedCode, HighlightedCodeProps } from './index'

const style = require('react-syntax-highlighter/dist/cjs/styles/hljs/github-gist')
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
