const SyntaxHighlighter = require('react-syntax-highlighter/dist/cjs/default-highlight').default
import './HighlightedCode.css'
import { cnHighlightedCode, HighlightedCodeProps } from './index'

const style = require('react-syntax-highlighter/dist/cjs/styles/hljs/github-gist').default
import { FC } from 'react'

const HighlightedCode: FC<HighlightedCodeProps> = ({ code }) => (
  <div
    className={cnHighlightedCode()}>
    <SyntaxHighlighter language="js"
                       style={style}
                       customStyle={{ margin: 0 }}
                       showLineNumbers={true}>
      {code}
    </SyntaxHighlighter>
  </div>
)
export default HighlightedCode
