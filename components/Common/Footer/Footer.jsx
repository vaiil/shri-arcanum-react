import Container from 'components/Base/Container/Container'
import FooterInner from './-Inner/Footer-Inner'
import FooterText from './-Text/Footer-Text'
import FooterVersion from './-Version/Footer-Version'
import FooterCopyright from './-Copyright/Footer-Copyright'
import {cnFooter} from './index'
import './Footer.css'

export default () => (
  <div className={cnFooter()}>
    <FooterInner>
      <FooterText/>
      <FooterVersion/>
      <FooterCopyright/>
    </FooterInner>
  </div>
)
