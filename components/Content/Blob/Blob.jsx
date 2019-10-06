import SyntaxHighlighter from 'react-syntax-highlighter'

export default ({ blob }) => (
  <SyntaxHighlighter language="js"
                     showLineNumbers={true}>
    {blob}
  </SyntaxHighlighter>
)
