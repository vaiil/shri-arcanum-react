import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/default-highlight'
import './HighlightedCode.css'
import { cnHighlightedCode } from './index'
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/github-gist'

export default ({ code }) => (
  <SyntaxHighlighter language="js"
                     style={style}
                     className={cnHighlightedCode()}
                     customStyle={{ margin: 0 }}
                     showLineNumbers={true}>
    {code}
  </SyntaxHighlighter>
)