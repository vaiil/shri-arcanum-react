import Container from 'components/Base/Container/Container'
import FooterInner from './-Inner/Footer-Inner'
import FooterText from './-Text/Footer-Text'
import FooterVersion from './-Version/Footer-Version'
import FooterCopyright from './-Copyright/Footer-Copyright'
import {cn} from '@bem-react/classname'
import './Footer.css'

export default () => (
  <div className={cn('Footer')()}>
    <FooterInner>
      <FooterText/>
      <FooterVersion/>
      <FooterCopyright/>
    </FooterInner>
  </div>
)
